// ===== Nav: scroll state + mobile menu =====
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const closeMenu = () => { links.classList.remove('open'); nav.classList.remove('menu-open'); };
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  nav.classList.toggle('menu-open', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(
  '.section__head, .lab__text, .lab__media, .value, .corso, .orari__intro, .orari__card, .g-item, .ig__item, .testi__inner, .contatti__info, .form'
);
revealEls.forEach((el, i) => {
  el.setAttribute('data-reveal', '');
  el.style.transitionDelay = `${(i % 6) * 60}ms`;
});
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ===== Contact form (demo) =====
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  note.hidden = false;
  form.querySelector('button').textContent = 'Richiesta inviata ✓';
  setTimeout(() => { form.reset(); }, 400);
});

// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();
