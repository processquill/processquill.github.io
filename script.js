document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

async function loadProfilePhoto(){
  const img = document.getElementById('profilePhoto');
  if(!img) return;
  try{
    const files = Array.from({length:4},(_,i)=>`assets/profile-${i+1}.txt`);
    const parts = await Promise.all(files.map(path => fetch(path).then(r => {
      if(!r.ok) throw new Error('Photo asset unavailable');
      return r.text();
    })));
    img.src = 'data:image/jpeg;base64,' + parts.join('');
    img.onload = () => img.classList.add('loaded');
  }catch(err){
    console.warn('Profile photo could not be loaded.', err);
  }
}
loadProfilePhoto();

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
      `Hello Ramesh,`,
      ``,
      message,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company / organization: ${company}` : '',
      ``,
      `Sent from the ProcessQuill website.`
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:processquill@gmail.com?subject=${encodeURIComponent('ProcessQuill inquiry: ' + subject)}&body=${encodeURIComponent(body)}`;
  });
}
