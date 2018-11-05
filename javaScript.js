const button = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const arrowUp = document.querySelector('.fa-arrow-up');
const hamb = document.querySelector('.fa-bars');

const menu = () => {
  arrowUp.classList.toggle('active');
  hamb.classList.toggle('active');
  nav.classList.toggle('active');
}

button.addEventListener('click', menu);