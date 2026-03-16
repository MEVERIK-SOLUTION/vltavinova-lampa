var crypto = require('crypto');

// SHA-256 hash of password for comparison
var EXPECTED_HASH = process.env.ADMIN_PASSWORD_HASH;
var JWT_SECRET = process.env.JWT_SECRET;

function sha256(str) {
    return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

function createToken(secret) {
    var expires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    var data = 'admin:' + expires;
    var sig = crypto.createHmac('sha256', secret).update(data).digest('hex');
    return Buffer.from(data).toString('base64') + '.' + sig;
}

function verifyToken(token, secret) {
    if (!token || !secret) return false;
    var parts = token.split('.');
    if (parts.length !== 2) return false;
    var dataB64 = parts[0];
    var sig = parts[1];
    var data;
    try {
        data = Buffer.from(dataB64, 'base64').toString();
    } catch (e) {
        return false;
    }
    var expectedSig = crypto.createHmac('sha256', secret).update(data).digest('hex');
    if (sig.length !== expectedSig.length) return false;
    if (!crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expectedSig, 'hex'))) return false;
    var expiresPart = data.split(':')[1];
    if (!expiresPart) return false;
    return Date.now() < parseInt(expiresPart, 10);
}

module.exports = async function handler(req, res) {
    if (req.method === 'POST') {
        // Login
        if (!EXPECTED_HASH || !JWT_SECRET) {
            return res.status(503).json({ error: 'Auth není nakonfigurován.' });
        }

        var body;
        try {
            body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        } catch (e) {
            return res.status(400).json({ error: 'Invalid JSON' });
        }

        var password = body && body.password;
        if (!password || typeof password !== 'string') {
            return res.status(400).json({ error: 'Password required' });
        }

        var inputHash = sha256(password);
        
        // Timing-safe comparison
        if (inputHash.length !== EXPECTED_HASH.length ||
            !crypto.timingSafeEqual(Buffer.from(inputHash), Buffer.from(EXPECTED_HASH))) {
            return res.status(401).json({ error: 'Nesprávné heslo.' });
        }

        var token = createToken(JWT_SECRET);
        return res.status(200).json({ token: token });

    } else if (req.method === 'GET') {
        // Verify token
        var authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ valid: false });
        }
        var token = authHeader.substring(7);
        var valid = verifyToken(token, JWT_SECRET);
        return res.status(valid ? 200 : 401).json({ valid: valid });

    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
};

// Export verifyToken for use in other API routes
module.exports.verifyToken = verifyToken;
