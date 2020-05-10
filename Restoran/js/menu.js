const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click',()=>{
  burger.classList.toggle('_active');
  menu.classList.toggle('_active');
  document.body.classList.toggle('lock');
});