# Vltavínový strážce

**Ručně vyráběná lampička z větve a vltavínu** – webová prezentace s nenásilnou nabídkou k prodeji.

Stránka je připravena k nasazení přes **[Vercel](https://vercel.com)** jako čistý statický web (HTML + CSS + JS, bez buildovacího nástroje).

---

## Rychlý start

### 1. Přidejte obrázky

Nahrajte fotografie do složky [`images/`](images/README.md):

| Soubor | Popis |
|--------|-------|
| `images/hero.jpg` | Hlavní fotografie (hero sekce) |
| `images/story.jpg` | Foto příběhu / výroby |
| `images/gallery-1.jpg` … `gallery-5.jpg` | Galerie |

### 2. Upravte texty

Otevřete [`content/texts.md`](content/texts.md) – obsahuje všechny texty stránky.  
Zkopírujte je do `index.html` na místa označená komentářem `<!-- OBSAH: ... -->`.

### 3. Nastavte kontakt

V `index.html` vyhledejte `mailto:vas@email.cz` a doplňte svůj e-mail.  
Doplňte také URL sociálních sítí v patičce.

### 4. Nasaďte na Vercel

1. Přihlaste se na [vercel.com](https://vercel.com) a importujte tento repozitář.
2. Framework Preset: **Other** (statický web).
3. Output Directory: nechte prázdné.
4. Klikněte **Deploy** – hotovo!

Každý push do větve `main` automaticky nasadí novou verzi.

---

## Struktura projektu

```
vltavinova-lampa/
├── index.html              ← Hlavní stránka
├── css/
│   └── style.css           ← Styling (barvy, layout, animace)
├── js/
│   └── main.js             ← Lightbox, fade-in animace, navigace
├── images/                 ← Sem nahrajte fotografie
│   └── README.md           ← Pokyny pro obrázky
├── content/
│   └── texts.md            ← Editovatelné texty webu
├── vercel.json             ← Konfigurace Vercelu
└── .github/
    └── copilot-instructions.md  ← Instrukce pro GitHub Copilot
```

---

## Práce s GitHub Copilotem

Soubor [`.github/copilot-instructions.md`](.github/copilot-instructions.md) obsahuje:
- Přehled architektury projektu
- Konvence kódu
- Příklady promptů pro rozšíření webu (formulář, nové sekce, SEO, animace…)

---

## Barevná paleta

| Proměnná | Barva | Použití |
|----------|-------|---------|
| `--color-dark` | `#1a1a18` | Tmavé pozadí, text |
| `--color-green` | `#3d6b3f` | Vltavínová zelená (CTA, akcenty) |
| `--color-gold` | `#c8a55a` | Teplé světlo, tlačítka |
| `--color-cream` | `#f5f0e8` | Světlé sekce |

Všechny barvy jsou CSS custom properties v `css/style.css` (`:root` blok) – stačí je upravit na jednom místě.

---

## Licence

Kód je volně k použití pro tento projekt. Obsah (texty, fotografie) je chráněn autorskými právy.
