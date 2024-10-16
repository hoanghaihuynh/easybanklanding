
const toggle = document.querySelector('#hamBtn');
const navi = document.querySelector('#navigation');


toggle.addEventListener('click', () => {
    navi.classList.toggle("navigation-inactive");
    toggle.classList.toggle("header__toggle-btn__hamburger");
    toggle.classList.toggle("header__toggle-btn__hamburger--x");
    console.log('Hello');
});