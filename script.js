const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const n = document.getElementById('contactName')?.value.trim() || '';
    const em = document.getElementById('contactEmail')?.value.trim() || '';
    const c = document.getElementById('contactCompany')?.value.trim() || '';
    const s = document.getElementById('contactSubject')?.value.trim() || 'Project inquiry';
    const m = document.getElementById('contactMessage')?.value.trim() || '';
    const body = [
      'Hello Ramesh,', '', m, '',
      `Name: ${n}`,
      `Email: ${em}`,
      c ? `Company / organization: ${c}` : ''
    ].filter(Boolean).join('\n');
    location.href = `mailto:processquill@gmail.com?subject=${encodeURIComponent('ProcessQuill inquiry: ' + s)}&body=${encodeURIComponent(body)}`;
  });
}
