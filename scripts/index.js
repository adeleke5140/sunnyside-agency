const navToggle = document.querySelector('.nav__toggle');
const list = document.querySelector('.nav__list')

navToggle.addEventListener('click',toggleMenu);

function toggleMenu(){
    return list.classList.toggle('nav-open');
}