const menuButton=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open'));
// Subtle reveal-on-scroll for a little polish without a heavy framework.
const revealItems=document.querySelectorAll('.section-heading,.skill-card,.timeline-entry,.project-card,.education-card,.about-note');
revealItems.forEach(el=>el.classList.add('reveal'));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
revealItems.forEach(el=>observer.observe(el));
