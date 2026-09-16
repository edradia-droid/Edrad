document.addEventListener('DOMContentLoaded',()=>{
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();

  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('visible');
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  /* Use the actual header logo markup in the contact brand — no recreation. */
  const headerBrand=document.querySelector('.header-brand-hero');
  const contactBrand=document.querySelector('.contact-brand-bottom');
  if(headerBrand&&contactBrand){
    contactBrand.innerHTML=headerBrand.innerHTML;
    contactBrand.classList.add('contact-brand-exact');
    const style=document.createElement('style');
    style.textContent=`
      .contact-brand-exact .brand-mark{display:grid!important;width:29px!important;height:29px!important;flex:0 0 29px!important;font-size:15px!important}
      .contact-brand-exact strong{display:block!important;font:800 1rem/1 'DM Mono',monospace!important;letter-spacing:.04em!important;color:var(--text)!important}
      .contact-brand-exact strong:before,.contact-brand-exact strong:after{content:none!important;display:none!important}
      .contact-brand-exact small{display:block!important;margin-top:4px!important;font:500 7px/1.5 'DM Mono',monospace!important;letter-spacing:.055em!important;color:#b8b6b0!important;white-space:normal!important;max-width:250px!important}
    `;
    document.head.appendChild(style);
  }

  const menu=document.getElementById('menu-btn');
  const nav=document.getElementById('nav-menu');
  if(!menu||!nav)return;

  const closeMenu=()=>{
    nav.classList.remove('open');
    nav.removeAttribute('style');
    menu.setAttribute('aria-expanded','false');
  };

  const openMenu=()=>{
    nav.classList.add('open');
    nav.style.display='flex';
    nav.style.position='absolute';
    nav.style.top='82px';
    nav.style.left='0';
    nav.style.right='0';
    nav.style.flexDirection='column';
    nav.style.gap='0';
    nav.style.padding='10px 6vw 18px';
    nav.style.background='rgba(10,10,11,.97)';
    nav.style.borderBottom='1px solid rgba(255,255,255,.08)';
    nav.style.backdropFilter='blur(16px)';
    nav.style.webkitBackdropFilter='blur(16px)';
    nav.style.zIndex='999';
    menu.setAttribute('aria-expanded','true');
  };

  menu.addEventListener('click',e=>{
    e.preventDefault();
    nav.classList.contains('open')?closeMenu():openMenu();
  });

  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  window.addEventListener('resize',()=>{
    if(window.innerWidth>850)closeMenu();
  });
});
