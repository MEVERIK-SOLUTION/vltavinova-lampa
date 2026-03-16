/* ═══════════════════════════════════════════════════════════════
   Vltavínový strážce – interaktivní funkce
   ═══════════════════════════════════════════════════════════════ */

// ── Aktuální rok v patičce ────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ── Lightbox pro galerii ─────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.setAttribute('hidden', '');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

// Klik na obrázek v galerii
document.querySelectorAll('.gallery__item img').forEach((img) => {
  img.addEventListener('click', () => {
    openLightbox(img.src, img.alt);
  });
});

// Zavření lightboxu
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// Zavření klávesou Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.hasAttribute('hidden')) {
    closeLightbox();
  }
});

// ── Plynulé zvýraznění aktivní navigace ─────────────────────
const sections = document.querySelectorAll('main section[id], header[id]');
const navLinks = document.querySelectorAll('.main-nav a');

const observerOptions = {
  root: null,
  rootMargin: '-40% 0px -40% 0px',
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

// ── Fade-in animace při scrollování ──────────────────────────
const fadeEls = document.querySelectorAll(
  '.story__text, .story__image, .gallery__item, .detail-card, .cta__box'
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeEls.forEach((el) => {
  el.classList.add('fade-in');
  fadeObserver.observe(el);
});
