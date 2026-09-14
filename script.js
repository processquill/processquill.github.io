document.getElementById('year').textContent = new Date().getFullYear();

// Add a clear fixed-price section that mirrors the current Upwork Project Catalog offers.
const servicesSection = document.getElementById('services');
if (servicesSection) {
  const pricingSection = document.createElement('section');
  pricingSection.id = 'pricing';
  pricingSection.className = 'section pricing-section';
  pricingSection.innerHTML = `
    <div class="container">
      <div class="section-heading reveal">
        <p class="eyebrow">SERVICES & FIXED-PRICE PACKAGES</p>
        <h2>Clear scope. Clear price. Specialist pharmaceutical documentation.</h2>
        <p>These package prices mirror the current ProcessQuill offers prepared for Upwork. They are designed for clearly defined documentation assignments. Larger, unusual or site-specific GMP projects are scoped separately before work starts.</p>
      </div>

      <div class="pricing-service reveal">
        <div class="pricing-service-head">
          <div>
            <span class="pricing-number">SERVICE 01</span>
            <h3>GMP SOP & Work Instruction Development</h3>
            <p>Review, rewrite or create practical GMP procedures and work instructions from your process information, draft documents or company template.</p>
          </div>
          <span class="pricing-badge">Fixed price</span>
        </div>
        <div class="tier-grid">
          <article class="tier-card">
            <span class="tier-label">Starter</span>
            <h4>Document Review</h4>
            <div class="tier-price"><small>USD</small><strong>$79</strong></div>
            <p>Review and improve an existing SOP, work instruction or technical procedure.</p>
            <ul><li>Structure and wording review</li><li>GMP-focused editing</li><li>1 defined document</li></ul>
            <a href="#contact" class="tier-link">Discuss Starter →</a>
          </article>
          <article class="tier-card tier-featured">
            <div class="popular-tag">Most practical</div>
            <span class="tier-label">Standard</span>
            <h4>SOP / Work Instruction</h4>
            <div class="tier-price"><small>USD</small><strong>$149</strong></div>
            <p>Create or substantially revise one structured SOP or work instruction for a defined process.</p>
            <ul><li>Process-based document structure</li><li>Roles, steps and controls</li><li>Professional formatting</li></ul>
            <a href="#contact" class="tier-link">Discuss Standard →</a>
          </article>
          <article class="tier-card">
            <span class="tier-label">Advanced</span>
            <h4>Complete SOP Package</h4>
            <div class="tier-price"><small>USD</small><strong>$279</strong></div>
            <p>A more comprehensive documentation package for a defined GMP process or procedure set.</p>
            <ul><li>Expanded document development</li><li>Supporting structure and consistency review</li><li>Higher-complexity scope</li></ul>
            <a href="#contact" class="tier-link">Discuss Advanced →</a>
          </article>
        </div>
      </div>

      <div class="pricing-service reveal delay-1">
        <div class="pricing-service-head">
          <div>
            <span class="pricing-number">SERVICE 02</span>
            <h3>Qualification & Validation Documentation</h3>
            <p>Specialist support for IQ, OQ, PQ, validation plans, protocols, reports, acceptance criteria, traceability and technical review.</p>
          </div>
          <span class="pricing-badge">Fixed price</span>
        </div>
        <div class="tier-grid">
          <article class="tier-card">
            <span class="tier-label">Starter</span>
            <h4>Validation Document Review</h4>
            <div class="tier-price"><small>USD</small><strong>$149</strong></div>
            <p>Improve an existing qualification or validation document and strengthen its technical and GMP logic.</p>
            <ul><li>Structure and consistency review</li><li>Acceptance-criteria review</li><li>GMP documentation feedback</li></ul>
            <a href="#contact" class="tier-link">Discuss Starter →</a>
          </article>
          <article class="tier-card tier-featured">
            <div class="popular-tag">Core offer</div>
            <span class="tier-label">Standard</span>
            <h4>Qualification / Validation Document</h4>
            <div class="tier-price"><small>USD</small><strong>$299</strong></div>
            <p>A dedicated qualification or validation document developed from your technical information and data.</p>
            <ul><li>IQ / OQ / PQ or validation document</li><li>Test logic and acceptance criteria</li><li>Traceability-focused structure</li></ul>
            <a href="#contact" class="tier-link">Discuss Standard →</a>
          </article>
          <article class="tier-card">
            <span class="tier-label">Advanced</span>
            <h4>Complete Validation Package</h4>
            <div class="tier-price"><small>USD</small><strong>$549</strong></div>
            <p>A broader validation documentation package for a clearly defined system, equipment item or process.</p>
            <ul><li>Multi-document validation scope</li><li>Risk and traceability integration</li><li>Comprehensive technical review</li></ul>
            <a href="#contact" class="tier-link">Discuss Advanced →</a>
          </article>
        </div>
      </div>

      <div class="custom-service-note reveal">
        <div><strong>Risk Assessment / FMEA and other specialist GMP work</strong><span>Quoted separately because scope and complexity vary significantly by process.</span></div>
        <a href="#contact">Request a custom scope →</a>
      </div>
      <p class="pricing-footnote">Prices are fixed package prices for the stated baseline scope. Final deliverables, timelines and any additional work are confirmed before the project starts.</p>
    </div>`;
  servicesSection.insertAdjacentElement('afterend', pricingSection);

  // Make pricing easy to find from the navigation and hero.
  const mainNav = document.getElementById('mainNav');
  if (mainNav && !mainNav.querySelector('a[href="#pricing"]')) {
    const pricingLink = document.createElement('a');
    pricingLink.href = '#pricing';
    pricingLink.textContent = 'Pricing';
    const workLink = mainNav.querySelector('a[href="#work"]');
    mainNav.insertBefore(pricingLink, workLink || null);
  }
  const heroActions = document.querySelector('.hero-actions');
  if (heroActions && !heroActions.querySelector('a[href="#pricing"]')) {
    const priceButton = document.createElement('a');
    priceButton.className = 'btn btn-outline';
    priceButton.href = '#pricing';
    priceButton.textContent = 'View packages & prices';
    heroActions.appendChild(priceButton);
  }

  const pricingStyle = document.createElement('style');
  pricingStyle.textContent = `
    .pricing-section{background:#081d31;color:#fff;position:relative;overflow:hidden}
    .pricing-section:before{content:"";position:absolute;width:520px;height:520px;border-radius:50%;right:-210px;top:-170px;background:rgba(43,178,173,.08);pointer-events:none}
    .pricing-section .section-heading h2{color:#fff}.pricing-section .section-heading>p:last-child{color:#b8c7d1}
    .pricing-service{background:#0d2941;border:1px solid #29485f;border-radius:17px;padding:30px;margin-top:24px;position:relative;z-index:1}
    .pricing-service+.pricing-service{margin-top:24px}.pricing-service-head{display:flex;justify-content:space-between;gap:35px;align-items:flex-start;margin-bottom:25px}
    .pricing-service-head>div{max-width:760px}.pricing-number{font-size:9px;letter-spacing:1.8px;font-weight:700;color:#8ee5df}.pricing-service-head h3{font-family:"Source Serif 4",Georgia,serif;font-size:30px;line-height:1.15;margin:6px 0 9px}.pricing-service-head p{font-size:13px;color:#afbec8;margin:0}.pricing-badge{font-size:10px;font-weight:700;color:#082a2c;background:#8ee5df;border-radius:999px;padding:7px 10px;white-space:nowrap}
    .tier-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.tier-card{background:#fff;color:#1d2935;border-radius:13px;padding:24px;position:relative;border:1px solid #d8e3e7;min-height:355px;display:flex;flex-direction:column}.tier-card.tier-featured{border:2px solid #2bb2ad;box-shadow:0 18px 45px rgba(0,0,0,.16);transform:translateY(-4px)}.popular-tag{position:absolute;right:15px;top:14px;font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:1px;background:#e4f5f4;color:#107879;padding:5px 7px;border-radius:999px}.tier-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#2a9f9d}.tier-card h4{font-size:18px;margin:8px 0 13px;color:#15354e;padding-right:60px;line-height:1.3}.tier-price{display:flex;align-items:flex-start;gap:6px;margin-bottom:12px}.tier-price small{font-size:9px;color:#7c8b95;margin-top:8px}.tier-price strong{font-family:"Source Serif 4",Georgia,serif;font-size:40px;line-height:1;color:#0b304a}.tier-card>p{font-size:12px;color:#667684;margin:0 0 15px}.tier-card ul{list-style:none;padding:14px 0 0;margin:0 0 20px;border-top:1px solid #e3e9ec}.tier-card li{font-size:11px;color:#4f616d;padding:4px 0}.tier-card li:before{content:"✓";color:#2aa5a2;font-weight:700;margin-right:7px}.tier-link{margin-top:auto;color:#117e80;text-decoration:none;font-size:11px;font-weight:700}.tier-link:hover{text-decoration:underline}
    .custom-service-note{display:flex;justify-content:space-between;gap:25px;align-items:center;margin-top:22px;padding:19px 22px;border:1px dashed #44647a;border-radius:12px;background:rgba(255,255,255,.025)}.custom-service-note strong{display:block;font-size:13px}.custom-service-note span{display:block;font-size:11px;color:#9fb1bd;margin-top:2px}.custom-service-note a{color:#8ee5df;text-decoration:none;font-size:11px;font-weight:700;white-space:nowrap}.pricing-footnote{font-size:10px;color:#8198a8;margin:14px 2px 0}
    @media(max-width:900px){.tier-grid{grid-template-columns:1fr}.tier-card{min-height:0}.tier-card.tier-featured{transform:none}.pricing-service-head{flex-direction:column;gap:12px}.pricing-badge{align-self:flex-start}}
    @media(max-width:560px){.pricing-service{padding:19px}.pricing-service-head h3{font-size:25px}.custom-service-note{flex-direction:column;align-items:flex-start}.tier-price strong{font-size:36px}}
  `;
  document.head.appendChild(pricingStyle);
}

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
if(menuBtn && mainNav){
  menuBtn.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
  }));
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
      'Hello Ramesh,','',message,'',`Name: ${name}`,`Email: ${email}`,
      company ? `Company / organization: ${company}` : '', '',
      'Sent from the ProcessQuill website.'
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:processquill@gmail.com?subject=${encodeURIComponent('ProcessQuill inquiry: ' + subject)}&body=${encodeURIComponent(body)}`;
  });
}
