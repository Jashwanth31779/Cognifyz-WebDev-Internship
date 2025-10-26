
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

const form=document.getElementById('userForm');
const msg=document.getElementById('greetMsg');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('username').value.trim();
  msg.textContent=`Hello, ${name}! 👋 Welcome to Cognifyz WebDev Internship.`;
  msg.style.color='#28a745';
  form.reset();
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');}
  });
},{threshold:0.2});

document.querySelectorAll('section').forEach(sec=>observer.observe(sec));
