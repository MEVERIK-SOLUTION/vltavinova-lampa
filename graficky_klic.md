# 🗺️ Grafický Klíč — Vltavínový Strážce

> **Dokument určen pro webového kodéra/agenta.**  
> Popisuje obsah každého obrázku, jeho přesné umístění v layoutu webu, navrhované animace, přechody a doplňující textové návrhy. Pracuje s výslednou sadou **17 unikátních fotografií** po odstranění 7 duplicit.

---

## 📸 Katalog Obrázků (17 unikátních)

> Všechny obrázky se nacházejí ve složce `images/`. Jsou to AI-vizualizace zachycující atmosféru projektu, tvůrce a produkt. Filmový šerosvit a nádech magie se aplikuje pomocí CSS filtrů definovaných v `vstupni_index.html` (třída `.dramatic-photo`).

| # | Soubor | Rozměry | Orientace | Popis obsahu |
|---|--------|---------|-----------|-------------|
| 01 | `Lampicka_cover_prodej.jpg` | 1024×1024 | Čtverec | Produktová propagační vizualizace — lampička na prémiové podložce s grafikou certifikací a textem „Vesmír, změněný v umění". Světlé pozadí, obchodní estetika. |
| 02 | `Les_vtlaviny_2_lampicka.jpg` | 847×1264 | Portrét | Mystický les s magickými zelenými světly a kořeny. Lampičky v prostoru lesa. Temná, pohádková, surreálná scéna s vibrujícími barvami. |
| 03 | `Vltavinovi_strazce4.jpg` | 1376×768 | Krajina | **Portrét tvůrců** — Matěj a Bára se usmívají, pracují nad plány/blueprinty u stolu. Světlý, přátelský tón. Nejlepší „lidský" záběr. |
| 04 | `bara_vizualizace_web_vltavinovi_strazce.jpg` | 1376×768 | Krajina | **Portrét Báry** — Bára na pozadí website-mockupu produktu s lampičkou. Webová prezentace v zákulisí. Vzdušná, moderní kompozice. |
| 05 | `drtivy_dopad_vltaviny_meteorit_lampicka.jpg` | 847×1264 | Portrét | **Kosmický náraz** — dramatická fantazijní scéna s meteoritem, vltavínovými světly a zeleno-fialovými energetickými proudy. Tmavá, dramatická estetika. |
| 06 | `lampicka_na_stole_tma.jpg` | 704×1524 | Portrét (vysoký) | **Klíčový produktový záběr** — lampička svítí v absolutní tmě na polici s knihami. Zelené vltavínové světlo. Intimní, magická atmosféra. |
| 07 | `lampicka_tvorba_kancelar.jpg` | 848×1264 | Portrét | **Výroba** — lampička v procesu tvorby v pracovně/dílně s blueprinty a nástroji. Teplé světlo, kreativní chaos. |
| 08 | `mateJ_prace_lampicka.jpg` | 1408×768 | Krajina (wide) | **Matěj u počítače** — Matěj pracuje u monitoru s kódem, tmavé studio s fialovým/modrým neonovým světlem. Hackerská estetika, technický záběr. |
| 09 | `matej_bara_cover_lampicka.jpg` | 1376×768 | Krajina | **Dramatický portrét tvůrců** — Bára a Matěj v tmavší, artistické kompozici. Drží lampičku, výraz odhodlání a kreativní intenzity. Cover-shot. |
| 10 | `matej_bara_tvorba_lampicky2.jpg` | 847×1264 | Portrét | **Tvorba spolu** — Bára a Matěj v dílně/studiu pracují na lampičce. Sdílená práce, synergie. Teplá paleta, detailní záber. |
| 11 | `pracovna_lampicka_hotovo.jpg` | 847×1264 | Portrét | **Hotový produkt** — lampička dokončená, stojí na pracovním stole. Zelené světlo vyzařuje do temnoty. Pocit završení, úspěchu. |
| 12 | `pracovna_zatisi2_lampicka.jpg` | 848×1264 | Portrét | **Zátiší pracovny** — lampička v teplé, útulné ateliérové atmosféře. Detail interiéru. Knižní police, kreativní studio. |
| 13 | `vizualizace_lampicka_les.jpg` | 848×1264 | Portrét | **Lampička v lese** — produkt v mystickém lesním prostředí, kořeny a kapradiny obklopují lampičku. Zeleno-zlatá paleta. Propojení přírody a techniky. |
| 14 | `vizualizace_matej_bara_tvori_lampicka.jpg` | 686×1024 | Portrét | **Intimní tvorba** — Matěj a Bára v úzkém záběru, drží lampičku a diskutují. Blízkost, spolupráce, lidský rozměr projektu. |
| 15 | `vizualize_web_lampicka.jpg` | 847×1264 | Portrét | **Web-vizualizace** — lampička s grafickým overlayem „Vesmír, změněný v umění". Digitální estetika, propojení fyzického a virtuálního. |
| 16 | `vltaviny_les_lampicka.jpg` | 1376×768 | Krajina (wide) | **Mystická krajina** — Široký záběr lesní krajiny s magickými zelenými vltavínovými světly a závojem kouře. Epická, cinematická scéna. |
| 17 | `zatisi_lampicka_kancelar.jpg` | 848×1264 | Portrét | **Kancelářské zátiší** — lampička na počítačovém stole s klávesnicí a monitory s kódem. Technika a umění v jednom rámci. |

---

## 🗺️ Nasazení Obrázků do Webu (Sekce po Sekci)

### 🔵 NAV + LOGO
- **Žádný obrázek** — čistá navigace, tmavé pozadí (`--bg-deep`).
- Logo „Vltavínový Strážce" v typografii Playfair Display.

---

### 🌑 HERO — Úvodní Sekce (Slideshow na pozadí)

**Funkce:** Fullscreen slideshow s postupným přechodem (fade in/out), tmavý overlay, Canvas animace hvězdného prachu.

**4 obrázky pro slideshow (v pořadí):**
1. `lampicka_na_stole_tma.jpg` — **slide 1** (0s) — lampička ve tmě, magický vstup
2. `vltaviny_les_lampicka.jpg` — **slide 2** (6s) — epická lesní krajina, rozšíření světa
3. `drtivy_dopad_vltaviny_meteorit_lampicka.jpg` — **slide 3** (12s) — kosmický původ, dramatika
4. `vizualizace_lampicka_les.jpg` — **slide 4** (18s) — lampička v přírodě, emocionální závěr

**CSS třídy:** `.dramatic-photo`, `.slideshow-image`  
**Filtr:** `grayscale(40%) contrast(125%) brightness(60%) sepia(15%)`  
**Alt texty:**
- Slide 1: `"Vltavínový Strážce svítí v temnotě"`
- Slide 2: `"Mystický vltavínový les"`
- Slide 3: `"Drtivý náraz — zrození vltavínu"`
- Slide 4: `"Strážce v objetí přírody"`

---

### 🌌 KAPITOLA I — Původ / Náraz (Sekce `#puvod`)

**Layout:** Split — vlevo text, vpravo obrázek.

**Obrázek v split-image (pravá strana):**
- **`drtivy_dopad_vltaviny_meteorit_lampicka.jpg`** (847×1264)
- *Proč:* Dramaticky ilustruje kosmický náraz popsaný v textu. Zelené vltavínové záblesky = energie destrukce a zrodu.
- **CSS třída:** `.dramatic-photo`
- **Alt:** `"Kosmický náraz a zrození vltavínu"`

**Volitelný doplněk pod textem (full-width pás):**
- **`Les_vtlaviny_2_lampicka.jpg`** jako pozaďový obrázek sekce s nízkou opacitou (0.08)
- Evokuje mystické prostředí vzniku

---

### 🔥 KAPITOLA II — Filozofie / Vyhoření (Sekce `#filozofie`)

**Layout:** Textový sloupec + split sekce (text vlevo, obrázek vpravo, `reverse`).

**Obrázek v split-image (levá strana v reverse):**
- **`mateJ_prace_lampicka.jpg`** (1408×768)
- *Proč:* Matěj u počítače s kódem = dokonalá vizuální metafora textu o technickém světě, izolaci a vyhoření.
- **CSS třída:** `.dramatic-photo`
- **Alt:** `"Matěj v pološeru u kódu — moment vyhoření"`
- **Tip:** `object-position: center top` pro zachycení obličeje

**Volitelný doplněk — malý inline obrázek k citátu:**
- **`zatisi_lampicka_kancelar.jpg`** — zátiší s laptopem a lampičkou
- Umístit jako `float: right` nebo `figure` s `caption` k odstavci o hledání smyslu

---

### 👥 KAPITOLA III — Tvůrci / Zrození (Sekce `#tvurci`)

**Layout:** Split — vlevo obrázek, vpravo text.

**Primární obrázek (levá strana):**
- **`Vltavinovi_strazce4.jpg`** (1376×768) — světlý, přátelský portrét obou tvůrců
- **CSS třída:** `.dramatic-photo .portrait-photo`
- **Alt:** `"Matěj a Bára — tvůrci Vltavínového Strážce"`
- **`object-position: center 25%`** pro zachycení tváří

**Doplňkový obrázek — tvorba (pod split sekcí nebo jako galerie 2 fotek):**
- **`matej_bara_tvorba_lampicky2.jpg`** — společná práce na lampičce
- **Alt:** `"Tvorba Vltavínového Strážce — Bára a Matěj v dílně"`

**Volitelná sekce — „Za scénou tvorby" (přidaná podsekce):**
- **`lampicka_tvorba_kancelar.jpg`** — lampička v procesu výroby, blueprinty
- **`vizualizace_matej_bara_tvori_lampicka.jpg`** — intimní záběr při tvorbě
- Layout: 2 obrázky vedle sebe (grid `1fr 1fr`), max-width 900px

---

### ✨ KAPITOLA IV — AI Oracle / Poselství (Sekce `#oracle`)

**Obrázek jako pozadí sekce:**
- **`vltaviny_les_lampicka.jpg`** (1376×768) — široká krajina s magickými světly
- **Opacity:** `0.12` (velmi jemný overlay, nepřekrývá UI)
- **Filter:** `grayscale(60%) blur(2px)` (navíc ke standardnímu filtru)
- **Alt:** `"Mystická vltavínová krajina — Poselství Strážce"`
- *Proč:* Epická šíře krajiny dává sekci pocit transcendence a prostoru pro „setkání se Strážcem"

---

### 💎 KAPITOLA V — Artefakt / Prodej (Sekce `#artefakt`)

**Hlavní produktový záběr (nad formulářem nebo vedle něj):**
- **`Lampicka_cover_prodej.jpg`** (1024×1024) — profesionální produktový shot
- Umístění: `max-width: 400px; margin: 0 auto;` nad kontaktním boxem
- **CSS třída:** `.dramatic-photo` (hover effect odkryje barvy)
- **Alt:** `"Vltavínový Strážce — Model 001 — Vesmír, změněný v umění"`

**Pozadí kontaktního boxu (subtle):**
- **`pracovna_lampicka_hotovo.jpg`** — hotová lampička na stole
- **Opacity:** `0.08`, `filter: grayscale(80%) blur(3px)`

**Volitelný druhý pohled — zátiší produktu:**
- **`pracovna_zatisi2_lampicka.jpg`** — lampička v útulném prostředí
- Lze přidat jako sekundární foto pod primárním (transition: reveal on scroll)

---

### 🦶 FOOTER
- **Žádný obrázek** — čistý typografický footer.
- Případně velmi jemný SVG ornamant nebo vltavínový symbol jako separator.

---

## 🎬 Animace a Přechody — Doporučení

### 1. Parallax Scrolling (Hero → Kapitola I)
```css
/* Na hero slideshow obrázky přidat transform při scrollu */
.slideshow-image {
    transform: translateY(calc(var(--scroll-y, 0) * 0.3px));
    will-change: transform;
}
```
- Implementace: `window.addEventListener('scroll', () => { document.documentElement.style.setProperty('--scroll-y', window.scrollY) })`
- Efekt: Plynulý parallax dává hero hloubku a kinematický charakter.

### 2. Scroll Reveal — Stávající implementace (rozšíření)
Stávající `.reveal` + `IntersectionObserver` zachovat a rozšířit o:
- **`reveal-left`** — obrázky přilétají zleva (`translateX(-80px)`)
- **`reveal-right`** — obrázky přilétají zprava (`translateX(80px)`)
- **`reveal-scale`** — obrázky se zvětšují ze 95% → 100%

```css
.reveal-left { opacity: 0; transform: translateX(-80px); transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
.reveal-right { opacity: 0; transform: translateX(80px); transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
.reveal-scale { opacity: 0; transform: scale(0.95); transition: all 1.4s cubic-bezier(0.2, 0.8, 0.2, 1); }
.reveal-left.active, .reveal-right.active, .reveal-scale.active { opacity: 1; transform: translateX(0) scale(1); }
```

### 3. Dramatic Photo — Hover Reveal (stávající, zachovat)
```css
.dramatic-photo:hover {
    filter: grayscale(10%) contrast(110%) brightness(85%) sepia(0%);
    transform: scale(1.03);
    /* Přidat: */
    box-shadow: 0 0 40px rgba(203, 161, 53, 0.2);
}
```
- Efekt: Po hoveru se obrázky „probouzejí" z temné desaturace do plných barev.

### 4. Ken Burns Effect na Slideshow
```css
@keyframes heroSlideshow {
    0%   { opacity: 0; transform: scale(1.08); }
    8%   { opacity: 1; transform: scale(1.05); }
    25%  { opacity: 1; transform: scale(1.02); }
    33%  { opacity: 0; transform: scale(1.00); }
    100% { opacity: 0; transform: scale(1.08); }
}
```
- Efekt: Každý slide pomalu „dýchá" přiblížením — cinematický Ken Burns efekt.

### 5. Cursor Glow na Produktové Fotografii (Artefakt)
```javascript
document.querySelector('.product-photo').addEventListener('mousemove', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.setProperty('--glow-x', `${x}px`);
    e.target.style.setProperty('--glow-y', `${y}px`);
});
```
```css
.product-photo::after {
    content: '';
    position: absolute;
    left: var(--glow-x, 50%);
    top: var(--glow-y, 50%);
    width: 200px; height: 200px;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(203,161,53,0.15) 0%, transparent 70%);
    pointer-events: none;
    border-radius: 50%;
}
```
- Efekt: Zlatá záře sleduje kurzor nad produktovým obrázkem — magický touch efekt.

### 6. Přechod Stránek (SPA Navigation)
```css
@keyframes emergeFromDark {
    from { opacity: 0; filter: blur(10px) brightness(0.5); transform: scale(0.98) translateY(10px); }
    to   { opacity: 1; filter: blur(0) brightness(1);      transform: scale(1) translateY(0); }
}
```
- Stávající animace zachovat, případně doplnit o `brightness` transition pro hlubší efekt „zrodu ze tmy".

### 7. Lazy Loading obrázků
```html
<img src="images/vizualizace_lampicka_les.jpg" loading="lazy" decoding="async" ...>
```
- Přidat `loading="lazy"` na všechny obrázky mimo hero slideshow (ty načíst eager).

---

## 📐 Layout Doporučení

### Poměry Stran a Objekt-Fit
| Sekce | Výška kontejneru | object-fit | object-position |
|-------|-----------------|-----------|----------------|
| Hero slideshow | `100vh` | `cover` | `center center` |
| Split-image (Kap I, II) | `min-height: 80vh` | `cover` | `center 30%` |
| Split-image (Kap III) | `min-height: 80vh` | `cover` | `center 20%` (tváře) |
| Oracle pozadí | `100%` | `cover` | `center center` |
| Produkt (Artefakt) | `400px` | `contain` | `center center` |

### Mobilní Přizpůsobení (breakpoint < 960px)
- Split sekce → stack: obrázek nahoře (50vh), text dole
- Slideshow: zachovat, přizpůsobit výšku na `100svh`
- Produktový záběr: full-width

---

## 📝 Návrhy Textových Rozšíření

### A. Rozšíření Kapitoly I — Fyzický a Technický Detail Vltavínu
*(Viz `texts/Text_5_Technicke_Detaily.md`)*
- Přidat faktoid blok: věk vltavínu, lokality nálezu, fyzikální vlastnosti skla
- Umístit jako „data card" vedle split-image v Kapitole I

### B. Rozšíření Kapitoly III — Technický Popis Lampičky
*(Viz `texts/Text_5_Technicke_Detaily.md`)*  
Přidat pod split sekci tvůrců faktický odstavec:
> *„Elektrická soustava: 12V LED pásek (4000K, CRI 90+), vestavěný driver, konopný opletený kabel 1.8m. Dřevěná základna: naplaveník ze Sázavy (stáří odhadnuto 80+ let). Vltavíny: 3 autentické tektity z jihočeských nalezišť, vsazené do ručně tvarované mosazné drátové objímky."*

### C. Nová Sekce — „Specifikace Artefaktu" (Kapitola V)
Přidat technický „spec sheet" vedle kontaktního formuláře:
```
● Materiál: Naplaveninové dřevo, autentické vltavíny (tektit SiO₂ 96%)
● Světlo: 12V LED 4000K, CRI 90+, konopný kabel
● Rozměry: cca 40×12×8 cm (každý kus je unikátní)
● Váha: cca 600–800g
● Certifikace: Ruční výroba, Originál — každý kus s průvodním listem
● Série: Limitovaná — Model 001
```

### D. Citát k Lampičce pro Oracle Sekci
Přidat nad oracle box:
> *„Jsem ztuhlá energie nárazu. Jsem zlomek dřeva, které přežilo povodeň. Jsem světlo, které se rozsvítilo, protože Matěj a Bára odmítli zůstat ve tmě."*  
> — Vltavínový Strážce

---

## 🎨 Barevná Paleta a Vizuální Styl

| Prvek | Barva | Použití |
|-------|-------|---------|
| Pozadí | `#050505` | Hlavní tmavé pozadí |
| Povrch | `#0a0a0b` | Panely, karty |
| Zlatá naděje | `#cba135` | Akcenty, citáty, hover |
| Zlatá záře | `rgba(203,161,53,0.15)` | Glow efekty |
| Vltavínová zeleň | `#4a5d4e` | Tematické akcenty |
| Text hlavní | `#e0e0e0` | Tělo textu |
| Text tlumený | `#888888` | Popisky, metadata |

**Fotografický filtr (CSS):**
```css
filter: grayscale(40%) contrast(125%) brightness(60%) sepia(15%) hue-rotate(350deg);
```
Tento filtr sjednocuje všechny AI vizualizace do jedné filmové estetiky šerosvitu.

---

## ✅ Kontrolní Seznam pro Kodéra

- [ ] Nahradit všechny `uploaded:...` src odkazy cestami `images/[filename].jpg`
- [ ] Hero slideshow: nastavit 4 obrázky dle tohoto klíče
- [ ] Kapitola I split-image: `drtivy_dopad_vltaviny_meteorit_lampicka.jpg`
- [ ] Kapitola II split-image: `mateJ_prace_lampicka.jpg`
- [ ] Kapitola III split-image (portrét tvůrců): `Vltavinovi_strazce4.jpg`
- [ ] Kapitola III galerie tvorby: `matej_bara_tvorba_lampicky2.jpg` + `lampicka_tvorba_kancelar.jpg`
- [ ] Oracle sekce pozadí: `vltaviny_les_lampicka.jpg`
- [ ] Artefakt produktový záběr: `Lampicka_cover_prodej.jpg`
- [ ] Artefakt pozadí boxu: `pracovna_lampicka_hotovo.jpg`
- [ ] Přidat `loading="lazy"` na obrázky mimo hero
- [ ] Přidat `reveal-left` / `reveal-right` na split obrázky
- [ ] Implementovat Ken Burns na hero slideshow
- [ ] Přidat spec-sheet do Kapitoly V
- [ ] Zkontrolovat mobilní zobrazení při breakpointu 960px

---

*Grafický klíč vytvořen: 2026-03-16 | MEVERIK STUDIO® | Vltavínový Strážce*
