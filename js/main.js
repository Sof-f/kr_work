document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__menu-btn');
    const nav = document.querySelector('.header__nav');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });
  