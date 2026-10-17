const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.textContent=open?'✕':'☰';
});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{
  navLinks.classList.remove('active');
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.textContent='☰';
}));
document.getElementById('year').textContent=new Date().getFullYear();
