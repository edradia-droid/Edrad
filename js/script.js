document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.getElementById('menu-btn'),nav=document.getElementById('nav-menu');
menu?.addEventListener('click',()=>{nav.classList.toggle('open')});