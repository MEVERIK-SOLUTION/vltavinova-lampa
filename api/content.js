var crypto = require('crypto');

var KV_URL = process.env.KV_REST_API_URL;
var KV_TOKEN = process.env.KV_REST_API_TOKEN;
var JWT_SECRET = process.env.JWT_SECRET;

function verifyToken(token, secret) {
    if (!token || !secret) return false;
    var parts = token.split('.');
    if (parts.length !== 2) return false;
    var data;
    try {
        data = Buffer.from(parts[0], 'base64').toString();
    } catch (e) {
        return false;
    }
    var expectedSig = crypto.createHmac('sha256', secret).update(data).digest('hex');
    if (parts[1].length !== expectedSig.length) return false;
    if (!crypto.timingSafeEqual(Buffer.from(parts[1], 'hex'), Buffer.from(expectedSig, 'hex'))) return false;
    var expiresPart = data.split(':')[1];
    if (!expiresPart) return false;
    return Date.now() < parseInt(expiresPart, 10);
}

async function kvGet(key) {
    if (!KV_URL || !KV_TOKEN) return null;
    var response = await fetch(KV_URL + '/get/' + key, {
        headers: { 'Authorization': 'Bearer ' + KV_TOKEN }
    });
    if (!response.ok) return null;
    var data = await response.json();
    return data.result;
}

async function kvSet(key, value) {
    if (!KV_URL || !KV_TOKEN) throw new Error('KV not configured');
    var response = await fetch(KV_URL, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + KV_TOKEN,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(['SET', key, value])
    });
    if (!response.ok) throw new Error('KV write failed');
    return true;
}

module.exports = async function handler(req, res) {
    if (req.method === 'GET') {
        // Public: return saved content (or empty)
        try {
            var raw = await kvGet('site_content');
            if (!raw) {
                return res.status(200).json({ content: null });
            }
            var content;
            try {
                content = typeof raw === 'string' ? JSON.parse(raw) : raw;
            } catch (e) {
                content = raw;
            }
            return res.status(200).json({ content: content });
        } catch (err) {
            console.error('Content GET error:', err);
            return res.status(200).json({ content: null });
        }

    } else if (req.method === 'PUT') {
        // Protected: save content
        var authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        if (!verifyToken(authHeader.substring(7), JWT_SECRET)) {
            return res.status(401).json({ error: 'Token expired or invalid' });
        }

        if (!KV_URL || !KV_TOKEN) {
            return res.status(503).json({ error: 'Úložiště obsahu (Vercel KV) není nakonfigurováno. Vytvořte KV store v Vercel Dashboard.' });
        }

        var body;
        try {
            body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        } catch (e) {
            return res.status(400).json({ error: 'Invalid JSON' });
        }

        if (!body || typeof body !== 'object') {
            return res.status(400).json({ error: 'Content object required' });
        }

        try {
            await kvSet('site_content', JSON.stringify(body));
            return res.status(200).json({ success: true });
        } catch (err) {
            console.error('Content PUT error:', err);
            return res.status(500).json({ error: 'Chyba při ukládání obsahu.' });
        }

    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
};
