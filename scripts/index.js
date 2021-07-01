const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click',toggleMenu);

function toggleMenu(){
    return navToggle.classList.toggle('.nav-open');
}