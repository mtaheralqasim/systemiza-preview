document.documentElement.classList.add('js');

const page = document.body.dataset.page || 'home';
const base = page.startsWith('solution-') ? '../../' : './';
const active = name => page === name || (name === 'solutions' && page.startsWith('solution-')) ? 'active' : '';
const current = name => page === name ? 'aria-current="page"' : '';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!document.querySelector('link[href*="polish.css"]')) {
  const polishStyles = document.createElement('link');
  polishStyles.rel = 'stylesheet';
  polishStyles.href = `${base}polish.css?v=22`;
  document.head.append(polishStyles);
}
const products = [
  { number: '01', slug: 'notifiza', name: 'Notifiza', descriptor: 'Smart notifications', icon: 'notifiza.png' },
  { number: '02', slug: 'verifiza', name: 'Verifiza', descriptor: 'Trusted verification', icon: 'verifiza.png' },
  { number: '03', slug: 'messagiza', name: 'Messagiza', descriptor: 'Business messaging', icon: 'messagiza.png' },
  { number: '04', slug: 'adveriza', name: 'Adveriza', descriptor: 'Campaign automation', icon: 'adveriza.png' }
];

const productIcon = (product, className = '') => `<span class="${className}" aria-hidden="true"><img src="${base}assets/product-icons/${product.icon}" width="1024" height="1024" alt=""></span>`;

const header = `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="${base}index.html" aria-label="Systemiza home"><img src="${base}assets/systemiza-logo.svg" width="1920" height="400" alt="Systemiza"></a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a class="nav-link ${active('home')}" ${current('home')} href="${base}index.html">Home</a>
      <div class="nav-dropdown">
        <button class="solutions-trigger ${active('solutions')}" type="button" aria-expanded="false" aria-controls="solutions-menu">Solutions <span class="chevron" aria-hidden="true"></span></button>
        <div class="mega" id="solutions-menu" role="group" aria-label="Systemiza solutions">${products.map(product => `<a ${current(`solution-${product.slug}`)} href="${base}solutions/${product.slug}/">${productIcon(product, 'mega-product-icon')}<span><strong>${product.name}</strong><small>${product.descriptor}</small></span><i aria-hidden="true">↗</i></a>`).join('')}</div>
      </div>
      <a class="nav-link ${active('about')}" ${current('about')} href="${base}about.html">About</a>
      <a class="nav-link" href="${base}index.html#why">Why Systemiza</a>
      <a class="nav-link ${active('contact')}" ${current('contact')} href="${base}contact.html">Contact</a>
    </nav>
    <a class="btn btn-primary header-cta" href="${base}contact.html?type=demo">Request a Demo</a>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>
  </div>
  <nav class="mobile-panel" id="mobile-menu" aria-label="Mobile navigation">
    <a href="${base}index.html">Home</a><a href="${base}index.html#products">Solutions</a>
    <div class="mobile-products">${products.map(product => `<a ${current(`solution-${product.slug}`)} href="${base}solutions/${product.slug}/">${productIcon(product, 'mobile-product-icon')}<span><strong>${product.name}</strong><small>${product.descriptor}</small></span><i aria-hidden="true">↗</i></a>`).join('')}</div>
    <a href="${base}about.html">About</a><a href="${base}index.html#why">Why Systemiza</a><a href="${base}contact.html">Contact</a>
    <a class="btn btn-primary mobile-cta" href="${base}contact.html?type=demo">Request a Demo</a>
  </nav>
</header>`;

const socialLinks = `<div class="footer-socials" aria-label="Systemiza social media">
  <a href="https://www.facebook.com/systemiza" target="_blank" rel="noopener noreferrer" aria-label="Systemiza on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8H17V4.2c-.5-.1-2.1-.2-4-.2-3.9 0-6.6 2.4-6.6 6.8V14H2v4.3h4.4V24h5.4v-5.7h3.6L16 14h-4.2v-2.8c0-1.2.3-2 2.4-2Z"/></svg></a>
  <a href="https://x.com/isystemiza" target="_blank" rel="noopener noreferrer" aria-label="Systemiza on X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.5 22H3.4l7.2-8.2L2.9 2h6.3l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z"/></svg></a>
  <a href="https://www.linkedin.com/in/systemiza/" target="_blank" rel="noopener noreferrer" aria-label="Systemiza on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.8 7.7H.4V22h4.4V7.7ZM2.6 1A2.6 2.6 0 1 0 2.6 6.2 2.6 2.6 0 0 0 2.6 1ZM22 13.8c0-4.3-2.3-6.4-5.4-6.4a4.7 4.7 0 0 0-4.2 2.3v-2H8V22h4.4v-7.1c0-1.9.4-3.7 2.7-3.7s2.4 2.1 2.4 3.8v7H22v-8.2Z"/></svg></a>
</div>`;

const footer = `<footer class="site-footer"><div class="container"><div class="footer-grid">
  <div class="footer-brand"><img src="${base}assets/systemiza-logo.svg" width="1920" height="400" alt="Systemiza"><p>Connected technology for business communication, verification, notifications and digital engagement.</p>${socialLinks}</div>
  <div class="footer-col"><h3>Company</h3><a href="${base}about.html">About Systemiza</a><a href="${base}index.html#why">Why Systemiza</a><a href="${base}contact.html">Contact</a></div>
  <div class="footer-col"><h3>Solutions</h3>${products.map(product => `<a href="${base}solutions/${product.slug}/">${product.name}</a>`).join('')}</div>
  <div class="footer-col"><h3>Legal</h3><a href="${base}privacy.html">Privacy Policy</a><a href="${base}terms.html">Terms &amp; Conditions</a></div>
</div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Systemiza. All rights reserved.</span><span>Smart systems. Connected business.</span></div></div></footer>`;

const backToTop = `<button class="back-to-top" type="button" aria-label="Back to top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg></button>`;

document.body.insertAdjacentHTML('afterbegin', header);
document.body.insertAdjacentHTML('beforeend', `${footer}${backToTop}`);

const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-panel');
const dropdown = document.querySelector('.nav-dropdown');
const solutionsTrigger = document.querySelector('.solutions-trigger');
const topButton = document.querySelector('.back-to-top');
let lastFocused = null;

mobileMenu.inert = true;
function setMobile(open) {
  siteHeader.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.inert = !open;
  if (open) {
    lastFocused = document.activeElement;
    requestAnimationFrame(() => mobileMenu.querySelector('a')?.focus());
  } else if (lastFocused === menuToggle) menuToggle.focus();
}
function setDropdown(open) {
  dropdown.classList.toggle('open', open);
  solutionsTrigger.setAttribute('aria-expanded', String(open));
}
menuToggle.addEventListener('click', () => setMobile(!siteHeader.classList.contains('open')));
solutionsTrigger.addEventListener('click', () => setDropdown(!dropdown.classList.contains('open')));
document.addEventListener('click', event => { if (!dropdown.contains(event.target)) setDropdown(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const dropdownWasOpen = dropdown.classList.contains('open');
    setDropdown(false);
    if (siteHeader.classList.contains('open')) setMobile(false);
    else if (dropdownWasOpen) solutionsTrigger.focus();
  }
  if (event.key === 'Tab' && siteHeader.classList.contains('open')) {
    const focusable = [...mobileMenu.querySelectorAll('a,button')].filter(element => !element.hasAttribute('disabled'));
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMobile(false)));

const updateChrome = () => {
  siteHeader.classList.toggle('scrolled', scrollY > 12);
  topButton.classList.toggle('is-visible', scrollY > Math.max(520, innerHeight * .65));
};
updateChrome();
addEventListener('scroll', updateChrome, { passive: true });
addEventListener('resize', updateChrome, { passive: true });
addEventListener('pageshow', updateChrome);
topButton.addEventListener('click', () => scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' }));

const hero = document.querySelector('.b-hero--building');
if (hero) {
  let heroFrame = 0;
  const updateHeroDepth = () => {
    heroFrame = 0;
    if (reducedMotion.matches) {
      hero.style.setProperty('--hero-parallax', '0px');
      hero.style.setProperty('--hero-pan-x', '0px');
      return;
    }
    const progress = Math.min(1, Math.max(0, scrollY / Math.max(hero.offsetHeight, 1)));
    const mobile = innerWidth <= 640;
    const tablet = innerWidth <= 1100;
    const maxY = mobile ? 6 : tablet ? 18 : 26;
    const maxX = mobile ? -3 : tablet ? -8 : -12;
    hero.style.setProperty('--hero-parallax', `${(progress * maxY).toFixed(2)}px`);
    hero.style.setProperty('--hero-pan-x', `${(progress * maxX).toFixed(2)}px`);
  };
  const queueHeroDepth = () => {
    if (!heroFrame) heroFrame = requestAnimationFrame(updateHeroDepth);
  };
  updateHeroDepth();
  addEventListener('scroll', queueHeroDepth, { passive: true });
  addEventListener('resize', queueHeroDepth, { passive: true });
  reducedMotion.addEventListener?.('change', queueHeroDepth);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      hero.classList.toggle('hero-motion-paused', !entry.isIntersecting);
    }, { rootMargin: '120px 0px' }).observe(hero);
  }
}

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealTargets = document.querySelectorAll('.b-declaration__copy, .b-role-score > a, .b-products__intro, .b-chapter__media, .b-chapter__copy, .b-ecosystem__heading, .b-ecosystem__score, .b-foundation__title, .b-foundation__ledger, .b-industries header, .b-industry-index, .b-industry-stage, .b-integration__heading, .b-integration__field, .b-finale__content, .b-product-hero__copy, .b-product-role__copy, .b-product-flow, .b-capability, .b-outcome, .b-about-hero__copy, .b-company-system, .b-contact-hero__copy, .b-contact-form');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: .08, rootMargin: '0px 0px -4% 0px' });
  revealTargets.forEach((element, index) => {
    element.classList.add('polish-reveal');
    element.style.setProperty('--reveal-order', String(index % 4));
    observer.observe(element);
  });
  document.documentElement.classList.add('motion-ready');
}

requestAnimationFrame(() => document.body.classList.add('polish-loaded'));

const enquiry = document.querySelector('#enquiry-type');
if (enquiry) {
  const requested = new URLSearchParams(location.search).get('type');
  if (requested === 'demo') enquiry.value = 'Request a demo';
}

document.querySelectorAll('form[data-enquiry-form]').forEach(form => {
  const status = form.querySelector('.form-status');
  const fields = [...form.querySelectorAll('input,select,textarea')];
  const validate = field => {
    const error = field.closest('.field')?.querySelector('.field-error');
    let message = '';
    if (field.required && !field.value.trim()) message = 'This field is required.';
    else if (field.type === 'email' && field.value && !field.validity.valid) message = 'Enter a valid business email address.';
    field.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
    return !message;
  };
  fields.forEach(field => field.addEventListener('blur', () => validate(field)));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const valid = fields.map(validate).every(Boolean);
    status.className = `form-status ${valid ? 'is-info' : 'is-error'}`;
    status.textContent = valid ? 'This enquiry form is not connected to a submission service yet. No information has been sent.' : 'Please correct the highlighted fields.';
    if (!valid) form.querySelector('[aria-invalid="true"]')?.focus();
  });
});

const industryButtons = [...document.querySelectorAll('.b-industry-index button')];
const industryStage = document.querySelector('.b-industry-stage');
industryButtons.forEach(button => button.addEventListener('click', () => {
  industryButtons.forEach(item => {
    item.classList.toggle('is-active', item === button);
    item.setAttribute('aria-selected', String(item === button));
    item.tabIndex = item === button ? 0 : -1;
  });
  if (!industryStage) return;
  industryStage.dataset.sector = button.dataset.sector || 'financial';
  industryStage.querySelector('.b-industry-stage__number').textContent = button.dataset.number;
  industryStage.querySelector('.b-industry-stage__name').textContent = button.dataset.name;
  industryStage.querySelector('.b-industry-stage__copy').textContent = button.dataset.copy;
  if (!reducedMotion.matches && industryStage.animate) {
    industryStage.animate([
      { opacity: .62, transform: 'translateY(7px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 260, easing: 'cubic-bezier(.2,.8,.2,1)' });
  }
}));
industryButtons.forEach((button, index) => {
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', String(index === 0));
  button.tabIndex = index === 0 ? 0 : -1;
  button.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const increment = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1;
    const next = industryButtons[(index + increment + industryButtons.length) % industryButtons.length];
    next.focus();
    next.click();
  });
});
