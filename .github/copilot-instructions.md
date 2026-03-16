# GitHub Copilot – instrukce pro projekt Vltavínový strážce

## Kontext projektu

Tato webová stránka prezentuje ručně vyráběnou lampičku **Vltavínový strážce** –
jedinečný kus z větve a vltavínu (moldavitu) s hlubokým osobním příběhem.
Cílem je elegantní prezentace s nenásilnou nabídkou k prodeji.

Stránka je nasazena přes **Vercel** jako čisté statické HTML/CSS/JS (bez buildovacího nástroje).

---

## Struktura projektu

```
vltavinova-lampa/
├── index.html              ← Hlavní stránka (upravitelná)
├── css/
│   └── style.css           ← Veškerý styling
├── js/
│   └── main.js             ← Interaktivní funkce (lightbox, fade-in, navigace)
├── images/                 ← Sem nahrajte fotografie lampičky
│   └── README.md           ← Pokyny pro obrázky
├── content/
│   └── texts.md            ← Všechny texty webu (zde editujte)
├── vercel.json             ← Konfigurace nasazení
└── .github/
    └── copilot-instructions.md  ← Tento soubor
```

---

## Jak pracovat s projektem

### Přidání obrázků
1. Nahrajte soubory do složky `images/`.
2. Aktualizujte `src` a `alt` v `index.html` (označeno komentáři `<!-- Vyměňte src -->`).
3. Hero obrázek: `images/hero.jpg` (doporučeno 1920×1080 px).
4. Galerie: `images/gallery-1.jpg` až `images/gallery-5.jpg` (nebo více).

### Úprava textů
- Otevřete `content/texts.md` – obsahuje všechny texty rozdělené do sekcí.
- Zkopírujte upravený text do `index.html` na místa označená komentářem `<!-- OBSAH: ... -->`.

### Úprava barev a stylu
- Barvy a fonty jsou definovány jako CSS custom properties v `css/style.css` (`:root` blok).
- Hlavní barvy:
  - `--color-dark` – tmavé pozadí (`#1a1a18`)
  - `--color-green` – vltavínová zelená (`#3d6b3f`)
  - `--color-gold` – teplé světlo / zlatá (`#c8a55a`)
  - `--color-cream` – světlé sekce (`#f5f0e8`)

### Kontaktní e-mail
- V `index.html` vyhledejte `mailto:vas@email.cz` a nahraďte vlastní adresou.

---

## Agentic coding – tipy pro GitHub Copilot

Při práci s tímto projektem Copilot může pomoci s:

- **Přidáním nových sekcí** – např. sekce „Cena", „Certifikát pravosti vltavínu", „Jak pečovat".
- **Formulářem** – přidání kontaktního formuláře (mailto nebo Formspree/Netlify Forms).
- **Animacemi** – rozšíření JS animací, přidání parallax efektu pro hero.
- **SEO** – doplnění strukturovaných dat (JSON-LD pro produkt).
- **Přístupností** – audit ARIA atributů, kontrast barev.
- **Optimalizací obrázků** – přidání `<picture>` s WebP alternativami.
- **Temným/světlým režimem** – přidání přepínače theme.

### Příklady promptů pro Copilota

```
Přidej do index.html sekci "Cena" mezi sekce "Detaily" a "Zájem o koupi".
Cena je 4 500 Kč. Sekce by měla být stylově konzistentní se zbytkem stránky.
```

```
Přidej kontaktní formulář do sekce "Zájem o koupi". Formulář by měl mít
pole: Jméno, E-mail, Zpráva. Použij Formspree (action URL doplním).
Styling přizpůsob existujícímu CSS.
```

```
Optimalizuj galerii pro mobilní zařízení. Na mobilu zobrazuj obrázky
v jednom sloupci, na tabletu ve dvou sloupcích, na desktopu zachovej
aktuální asymetrické rozložení.
```

---

## Nasazení na Vercel

1. Připojte tento GitHub repozitář k projektu na [vercel.com](https://vercel.com).
2. Framework Preset: **Other** (statický web, žádný build).
3. Output Directory: ponechte prázdné (nebo `.`).
4. Každý push do větve `main` automaticky nasadí novou verzi.

---

## Konvence kódu

- **HTML**: sémantické elementy (`<header>`, `<main>`, `<section>`, `<footer>`, `<figure>`).
- **CSS**: BEM-like naming (`.blok__element--modifikátor`), CSS custom properties.
- **JS**: Vanilla JS (ES2020+), bez frameworků, bez bundleru.
- **Komentáře**: v češtině nebo angličtině, popisné.
- **Obrázky**: vždy `alt` atribut, `loading="lazy"` pro galerii.
