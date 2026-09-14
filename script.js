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
