const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click',toggleMenu);

function toggleMenu(){
    return document.body.classList.toggle('.nav-open');
}