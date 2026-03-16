# **🌲 Vltavínový Strážce**

*"Když technika získá duši. Pravda je boj. Fakta dýchají."*

Tento repozitář obsahuje zdrojové kódy webové prezentace, vizuální assety a textové materiály k umělecko-technickému projektu **Vltavínový Strážce**.

## **📖 O Projektu**

**Vltavínový Strážce** není jen ručně vyrobená lampička. Je to hmatatelný artefakt, monument překonané profesní krize a symbol nalezené rovnováhy. Spojuje surová fakta přírody – vesmírné **vltavíny** (tektity zrozené z kosmického nárazu) a prastaré, řekou opracované **dřevo** – s lidskou potřebou tvořit a najít smysl.

Projekt je dokonalou fúzí dvou světů:

* **Bára (Duše & Umění):** Čistá kreativní myšlenka, intuice a sochařské cítění, které dalo mrtvé hmotě tvar a život.  
* **Matěj (Tělo & Technika):** Exaktní procesy, technický řád, zapojení a struktura, které z vize udělaly fungující realitu.

Více o filozofii projektu a zrození z vyhoření najdete v přiložených textech (složka repozitáře).

## **💻 Technické řešení webu**

Webová prezentace je navržena tak, aby reflektovala těžkou, avšak nadějeplnou atmosféru projektu (šerosvit, hloubka, pološero).

* **Architektura:** Single Page Application (SPA) v čistém HTML, CSS a JavaScriptu. Pro běh není potřeba žádný složitý backend (kromě API klíče).  
* **Vizuální efekty (CSS3):** Pokročilé využití CSS filtrů (grayscale, sepia, contrast) pro dynamickou úpravu amatérských fotografií z mobilu do high-end filmového vizuálu přímo v prohlížeči.  
* **Atmosféra (HTML5 Canvas):** Na pozadí úvodní sekce běží plynulý generátor vesmírného prachu (Stardust), optimalizovaný pro nízkou zátěž procesoru.  
* **Animace:** Scroll Reveal přes IntersectionObserver pro plynulé vynořování textů a obrazů ze tmy.  
* **AI Orákulum (JavaScript & API):** Integrované připojení na umělou inteligenci (Google Gemini API). Modul má vtisknutou personu prastarého Strážce a odpovídá uživatelům na jejich pocity a obavy v reálném čase pomocí efektu psacího stroje (Typewriter effect).

## **🚀 Jak web spustit (Lokálně)**

Projekt je plně statický a nevyžaduje instalaci balíčků (Node.js/npm).

1. Naklonujte si repozitář do svého počítače.  
2. Otevřete soubor `reference/vstupni_index.html` v libovolném moderním webovém prohlížeči.  
3. *Poznámka k AI modulu:* Pro funkčnost sekce "Poselství Strážce" je nutné vložit vlastní platný Google Gemini API klíč do proměnné `const apiKey = ""`.

## **🌐 Nasazení na Vercel (Deployment)**

Soubory a kódy jsou připraveny a přepsány tak, aby mohl být web okamžitě a bez jakýchkoliv složitostí zveřejněn přes hostingovou službu **Vercel**.

Vzhledem k tomu, že se jedná o statickou SPA (Single Page Application), stačí tento repozitář jednoduše importovat do vašeho Vercel účtu. Vercel se postará o automatické nasazení (deployment) a projekt bude během několika vteřin dostupný online pod veřejnou doménou.

## **📂 Struktura repozitáře**

```
vltavinova-lampa/
├── reference/
│   └── vstupni_index.html       — Referenční vstupní HTML šablona webu (základ pro agentické úpravy)
├── texts/
│   ├── Text_1_Vltavin_a_Zem.md  — Esej o původu materiálů (vltavíny, dřevo, příroda)
│   ├── Text_2_Matejuv_Pribeh.md — Osobní zpověď a manifest „Fakta, která dýchají"
│   ├── Text_3_Barin_Pribeh.md   — O uměleckém přínosu a tvorbě
│   └── Text_4_Synergie_Produkt.md — Popis artefaktu a jeho synergie
├── images/
│   └── *.jpg                    — Fotografie pro web (výroba, produkt, vizualizace, atmosféra)
└── README.md
```

> **Poznámka k referenčnímu souboru:** `reference/vstupni_index.html` je šablona připravená k agentickým úpravám. Cesty k obrázkům (`uploaded:...`) a prázdný API klíč (`const apiKey = ""`) jsou zástupné hodnoty určené k nahrazení při tvorbě finálního webu. Soubor nelze přímo otevřít v prohlížeči bez úprav.

## **⚖️ Autorská práva**

Zdrojové kódy webu: **MEVERIK STUDIO®**

Artefakty, fotografie a texty jsou duševním vlastnictvím tvůrců (Matěj & Bára).
