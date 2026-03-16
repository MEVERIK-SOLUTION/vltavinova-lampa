var crypto = require('crypto');

var SYSTEM_PROMPT = "Jsi 'Vltavínový Strážce', prastarý duch dřeva vyvrženého vodou a vesmírného kamene, který spadl z hvězd. Jsi symbolem odolnosti, terapie, překonání vyhoření a nalezení identity. Uživatel ti svěří svou aktuální těžkou myšlenku nebo pocit zmaru. Poskytni metaforickou, poetickou odpověď (max 3 věty). Využívej metafory kořenů, vesmírného prachu, srážky pravdy a faktů a vnitřního jasu. Tón je klidný a dodávající hlubokou naději.";

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    var apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(503).json({ error: 'Oracle není nakonfigurován. Nastavte GEMINI_API_KEY v Vercel Dashboard.' });
    }

    var body;
    try {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch (e) {
        return res.status(400).json({ error: 'Invalid JSON' });
    }

    var userText = body && body.text;
    if (!userText || typeof userText !== 'string' || userText.trim().length === 0) {
        return res.status(400).json({ error: 'Text is required' });
    }

    // Limit input length
    if (userText.length > 2000) {
        userText = userText.substring(0, 2000);
    }

    var url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey;

    var payload = {
        systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
        },
        contents: [{ parts: [{ text: userText.trim() }] }],
        generationConfig: {
            maxOutputTokens: 200,
            temperature: 0.9
        }
    };

    try {
        var response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            var errText = await response.text();
            console.error('Gemini API error:', response.status, errText);
            return res.status(502).json({ error: 'Oracle nedokázal odpovědět.' });
        }

        var data = await response.json();
        var textResponse = data.candidates &&
            data.candidates[0] &&
            data.candidates[0].content &&
            data.candidates[0].content.parts &&
            data.candidates[0].content.parts[0] &&
            data.candidates[0].content.parts[0].text;

        if (!textResponse) {
            return res.status(502).json({ error: 'Prázdná odpověď od Oracle.' });
        }

        return res.status(200).json({ response: textResponse });
    } catch (err) {
        console.error('Oracle proxy error:', err);
        return res.status(500).json({ error: 'Interní chyba Oracle.' });
    }
};
