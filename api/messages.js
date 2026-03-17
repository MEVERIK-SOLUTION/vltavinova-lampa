var crypto = require('crypto');

var KV_URL = process.env.KV_REST_API_URL;
var KV_TOKEN = process.env.KV_REST_API_TOKEN;
var JWT_SECRET = process.env.JWT_SECRET;
var KV_KEY = 'site_messages';

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
    if (req.method === 'POST') {
        // Public: submit a new message from contact form
        if (!KV_URL || !KV_TOKEN) {
            // Graceful: accept message but warn it won't persist
            return res.status(503).json({ error: 'Úložiště zpráv není nakonfigurováno.' });
        }

        var body;
        try {
            body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        } catch (e) {
            return res.status(400).json({ error: 'Invalid JSON' });
        }

        var name = body && body.name;
        var email = body && body.email;
        var text = body && body.text;

        if (!name || !email || !text) {
            return res.status(400).json({ error: 'Všechna pole jsou povinná.' });
        }

        // Sanitize & limit lengths
        name = String(name).substring(0, 200);
        email = String(email).substring(0, 200);
        text = String(text).substring(0, 5000);

        // Load existing messages
        var messages = [];
        try {
            var raw = await kvGet(KV_KEY);
            if (raw) {
                messages = typeof raw === 'string' ? JSON.parse(raw) : raw;
                if (!Array.isArray(messages)) messages = [];
            }
        } catch (e) {
            messages = [];
        }

        // Limit to 500 most recent messages
        if (messages.length >= 500) {
            messages = messages.slice(-499);
        }

        messages.push({
            id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
            name: name,
            email: email,
            text: text,
            date: new Date().toISOString(),
            read: false
        });

        try {
            await kvSet(KV_KEY, JSON.stringify(messages));
            return res.status(200).json({ success: true });
        } catch (err) {
            console.error('Message save error:', err);
            return res.status(500).json({ error: 'Chyba při ukládání zprávy.' });
        }

    } else if (req.method === 'GET') {
        // Protected: list messages (admin only)
        var authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        if (!verifyToken(authHeader.substring(7), JWT_SECRET)) {
            return res.status(401).json({ error: 'Token expired or invalid' });
        }

        try {
            var raw = await kvGet(KV_KEY);
            var messages = [];
            if (raw) {
                messages = typeof raw === 'string' ? JSON.parse(raw) : raw;
                if (!Array.isArray(messages)) messages = [];
            }
            return res.status(200).json({ messages: messages });
        } catch (err) {
            console.error('Messages GET error:', err);
            return res.status(200).json({ messages: [] });
        }

    } else if (req.method === 'DELETE') {
        // Protected: delete a message by id
        var authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        if (!verifyToken(authHeader.substring(7), JWT_SECRET)) {
            return res.status(401).json({ error: 'Token expired or invalid' });
        }

        var body;
        try {
            body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        } catch (e) {
            return res.status(400).json({ error: 'Invalid JSON' });
        }

        var msgId = body && body.id;
        if (!msgId) {
            return res.status(400).json({ error: 'Message ID required' });
        }

        try {
            var raw = await kvGet(KV_KEY);
            var messages = [];
            if (raw) {
                messages = typeof raw === 'string' ? JSON.parse(raw) : raw;
                if (!Array.isArray(messages)) messages = [];
            }
            messages = messages.filter(function(m) { return m.id !== msgId; });
            await kvSet(KV_KEY, JSON.stringify(messages));
            return res.status(200).json({ success: true });
        } catch (err) {
            console.error('Message DELETE error:', err);
            return res.status(500).json({ error: 'Chyba při mazání zprávy.' });
        }

    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
};
