var SYSTEM_PROMPT = "Jsi 'Vltavínový Strážce', prastarý duch dřeva vyvrženého vodou a vesmírného kamene, který spadl z hvězd. Jsi symbolem odolnosti, terapie, překonání vyhoření a nalezení identity. Uživatel ti svěří svou aktuální těžkou myšlenku nebo pocit zmaru. Poskytni metaforickou, poetickou odpověď (max 3 věty). Využívej metafory kořenů, vesmírného prachu, srážky pravdy a faktů a vnitřního jasu. Tón je klidný a dodávající hlubokou naději.";

var FALLBACK_RESPONSES = [
    { keywords: ['únav', 'vyčerpán', 'vyhoření', 'vyhoř', 'burnout', 'nemůžu', 'nevládnu', 'síla'],
      texts: [
        'I kořeny prastarého dubu znají chvíle, kdy voda nepřichází. Ale právě v té žízni se učí sahat hlouběji — tam, kde čeká tichá síla, kterou jsi ještě neobjevil.',
        'Vesmírný prach, z něhož jsi stvořen, letěl miliardy let tmou, než našel své místo. Tvá únava není konec — je to jen změna oběžné dráhy.',
        'Naplavené dřevo nezemřelo, když ho řeka odtrhla od břehu. Naučilo se plout. A jednoho dne se z něj stal Strážce.'
      ]},
    { keywords: ['strach', 'bojím', 'úzkost', 'panik', 'nejistot', 'obav', 'hroz'],
      texts: [
        'Vltavín se zrodil ve srážce — v okamžiku, kdy se nebe střetlo se zemí. Každý tvůj strach je jen záblesk tohoto prapůvodního ohně, který tě formuje v něco vzácnějšího.',
        'Kořeny pod zemí nevidí slunce, a přesto k němu rostou. Tvůj strach je jen tma, skrz kterou prorůstáš směrem ke světlu.',
        'Strážce zná temnotu studené řeky i žár kosmického dopadu. Obojí ho učinilo tím, čím je. I tvůj strach je součástí tvé vzácnosti.'
      ]},
    { keywords: ['smut', 'smutn', 'plač', 'bolest', 'ztráta', 'odešel', 'odešla', 'chybí', 'samot'],
      texts: [
        'Řeka, která opustila dřevo na břehu, mu dala nový příběh. Každá ztráta je řeka, která tě nese k břehu, kde tě čeká tvůj skutečný tvar.',
        'Vltavín nese v sobě paměť hvězd, které již dávno vyhasly. A přesto svítí. Tvůj smutek je jen stín hvězdy, která v tobě stále hoří.',
        'Prastaré dřevo pamatuje každý dotyk proudu. Neztratilo ty vzpomínky — proměnilo je v kresbu svých letokruhů. I tvá bolest se stane součástí tvé krásy.'
      ]},
    { keywords: ['smysl', 'proč', 'účel', 'zbytečn', 'marné', 'k čemu', 'nevím kam', 'ztracen', 'ztracená'],
      texts: [
        'Meteorit, z něhož se zrodil vltavín, neznal svůj účel, když letěl vesmírem. Teprve srážka — ten zdánlivý konec — mu dala tvar a smysl. Tvá cesta teprve hledá svůj dopad.',
        'Naplavené dřevo neví, kam ho voda nese. Ale každý proud ho přibližuje k místu, kde se z něj stane něco, co tiše chrání a svítí.',
        'I hvězdy se musí nejprve zhroutit, než osvítí vesmír. Tvůj pocit marnosti je jen gravitace, která tě stahuje do tvého středu — k tvé vlastní záři.'
      ]},
    { keywords: ['zlost', 'vztek', 'frustrac', 'nespravedl', 'nenávist', 'nefér'],
      texts: [
        'Žár, který stvořil vltavín, byl ničivý i tvořivý zároveň. Tvůj oheň nemusí spalovat — může tavit a tvarovat něco, co dosud neexistovalo.',
        'Řeka, která drtí kameny, je také řekou, která je hladí do dokonalých tvarů. Tvůj vztek je ta samá síla — záleží jen na tom, jak dlouho ji necháš téct.',
        'Srážka meteoru se Zemí vypadala jako zkáza. Ale z toho chaosu se zrodila nejkrásnější sklovina na planetě. I tvá bouře může být začátkem něčeho vzácného.'
      ]},
    { keywords: ['láska', 'vztah', 'srdce', 'miluj', 'partner'],
      texts: [
        'Vltavín a naplavené dřevo se potkaly po miliónech let — kámen z vesmíru a dřevo z řeky. Nenašly se hledáním, ale tím, že obě přežily svou vlastní cestu.',
        'Kořeny dvou stromů se pod zemí proplétají, aniž by o tom listy věděly. Skutečné spojení neroste na povrchu — roste v tichu a v hloubce.',
        'Strážce vznikl spojením dvou příběhů — kosmického a pozemského. Ani jeden z nich nebyl úplný sám. Tvé srdce ví, co tvá mysl teprve hledá.'
      ]}
];

var GENERIC_RESPONSES = [
    'Vltavín v sobě nese paměť pádu i letu. Tvé myšlenky jsou jako ten meteorit — zdánlivě padají, ale ve skutečnosti míří přesně tam, kde se zrodí něco nového.',
    'Naplavené dřevo neztratilo svůj příběh, když ho řeka vzala. Našlo v proudu svůj skutečný tvar. I ty jsi uprostřed svého tvarování.',
    'Kořeny sahají tam, kam oči nedohlédnou. Tvá síla není v tom, co vidíš nad hladinou, ale v tom, co tiše roste v hloubce, kterou ještě neznáš.',
    'Strážce svítí, protože prošel tmou vesmíru i tmou říční hlubiny. Tvé nejtemnější chvíle jsou jen důkaz toho, jak daleko sahá tvé světlo.',
    'Z prachu hvězd a z třísky naplavené řekou se rodí tiché zázraky. Nemusíš rozumět celému příběhu — stačí důvěřovat dalšímu kroku.',
    'I hvězdný prach potřeboval miliardy let, než se stal vltavínem. Tvůj čas není ztracený — je to čas zrání, které má svůj vlastní rytmus.',
    'Řeka nekončí, když narazí na kámen — obteče ho a pokračuje. Tvá mysl má tutéž moudrost proudu, i když se ti zdá, že stojíš na místě.',
    'Tam, kde se střetává země s vesmírem, se rodí vltavín. Tam, kde se střetává bolest s nadějí, se rodíš ty — znovu a jinak.'
];

function pickFallback(userText) {
    var lower = userText.toLowerCase();
    for (var i = 0; i < FALLBACK_RESPONSES.length; i++) {
        var category = FALLBACK_RESPONSES[i];
        for (var k = 0; k < category.keywords.length; k++) {
            if (lower.indexOf(category.keywords[k]) !== -1) {
                var texts = category.texts;
                return texts[Math.floor(Math.random() * texts.length)];
            }
        }
    }
    return GENERIC_RESPONSES[Math.floor(Math.random() * GENERIC_RESPONSES.length)];
}

async function callGitHubModels(userText, env) {
    var token = env.MODELS_PAT;
    if (!token) return null;

    var response = await fetch('https://models.inference.ai.azure.com/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: userText }
            ],
            max_tokens: 200,
            temperature: 0.9
        })
    });

    if (!response.ok) {
        console.error('GitHub Models API error:', response.status);
        return null;
    }

    var data = await response.json();
    return data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
}

var corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
};

export default {
    async fetch(request, env) {
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        var url = new URL(request.url);
        if (url.pathname !== '/api/oracle') {
            return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: corsHeaders });
        }

        if (request.method !== 'POST') {
            return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders });
        }

        var body;
        try {
            body = await request.json();
        } catch (e) {
            return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders });
        }

        var userText = body && body.text;
        if (!userText || typeof userText !== 'string' || userText.trim().length === 0) {
            return new Response(JSON.stringify({ error: 'Text is required' }), { status: 400, headers: corsHeaders });
        }

        if (userText.length > 2000) {
            userText = userText.substring(0, 2000);
        }
        userText = userText.trim();

        // GitHub Models → fallback
        try {
            var aiResponse = await callGitHubModels(userText, env);
            if (aiResponse) {
                return new Response(JSON.stringify({ response: aiResponse }), { headers: corsHeaders });
            }
        } catch (err) {
            console.error('GitHub Models error:', err.message);
        }

        var fallback = pickFallback(userText);
        return new Response(JSON.stringify({ response: fallback }), { headers: corsHeaders });
    }
};
