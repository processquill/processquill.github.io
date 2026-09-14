document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const profilePhoto = document.getElementById('profilePhoto');
if (profilePhoto) {
  const showPhoto = () => profilePhoto.classList.add('loaded');
  if (profilePhoto.complete) showPhoto();
  else profilePhoto.addEventListener('load', showPhoto, {once:true});
}

// Keep the main page clean while giving clients access to the original certificates.
const qualifications = document.getElementById('qualifications');
if (qualifications && !document.getElementById('certificateGalleryLink')) {
  const wrap = document.createElement('div');
  wrap.id = 'certificateGalleryLink';
  wrap.style.marginTop = '30px';
  wrap.innerHTML = '<a class="btn btn-primary" href="certificates.html">View individual certificates</a>';
  qualifications.querySelector('.container')?.appendChild(wrap);
}

const mainNav = document.querySelector('.nav');
if (mainNav && !mainNav.querySelector('a[href="certificates.html"]')) {
  const link = document.createElement('a');
  link.href = 'certificates.html';
  link.textContent = 'Certificates';
  const contactLink = mainNav.querySelector('a[href="#contact"]');
  if (contactLink) mainNav.insertBefore(link, contactLink);
  else mainNav.appendChild(link);
}

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const company = document.getElementById('contactCompany').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const body = [
      'Hello Ramesh,',
      '',
      message,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company / organization: ${company}` : '',
      '',
      'Sent from the ProcessQuill website.'
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:processquill@gmail.com?subject=${encodeURIComponent('ProcessQuill inquiry: ' + subject)}&body=${encodeURIComponent(body)}`;
  });
}
