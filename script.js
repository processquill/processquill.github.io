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

// Add downloadable PDF portfolio samples beside the HTML previews.
const pdfSamples = {
  'sample-autoclave-qualification.html': 'samples/ProcessQuill_Sample_Autoclave_Qualification_Report.pdf',
  'sample-cleanroom-hvac.html': 'samples/ProcessQuill_Sample_Cleanroom_HVAC_Qualification_Report.pdf',
  'sample-aseptic-filling.html': 'samples/ProcessQuill_Sample_Aseptic_Filling_Validation_Summary.pdf',
  'sample-risk-assessment-fmea.html': 'samples/ProcessQuill_Sample_Process_FMEA_Risk_Assessment.pdf',
  'sample-sterile-filtration.html': 'samples/ProcessQuill_Sample_Sterile_Filtration_Validation_Report.pdf',
  'sample-equipment-cleaning-sop.html': 'samples/ProcessQuill_Sample_Equipment_Cleaning_SOP.pdf'
};

Object.entries(pdfSamples).forEach(([htmlPath, pdfPath]) => {
  const htmlLink = document.querySelector(`.sample-actions a[href="${htmlPath}"]`);
  if (!htmlLink || htmlLink.parentElement.querySelector('.pdf-link')) return;
  htmlLink.textContent = 'HTML preview →';
  const pdfLink = document.createElement('a');
  pdfLink.className = 'pdf-link';
  pdfLink.href = pdfPath;
  pdfLink.target = '_blank';
  pdfLink.rel = 'noopener';
  pdfLink.textContent = 'View PDF ↓';
  htmlLink.parentElement.appendChild(pdfLink);
});

if (document.querySelector('.sample-actions')) {
  const pdfStyle = document.createElement('style');
  pdfStyle.textContent = `.sample-actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center}.sample-actions .pdf-link{color:#fff;background:#0e2c45;padding:7px 10px;border-radius:7px}.sample-actions .pdf-link:hover{background:#163f5c}`;
  document.head.appendChild(pdfStyle);
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
