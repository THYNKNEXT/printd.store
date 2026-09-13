const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');

if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
}
