const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__nav');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active')
})