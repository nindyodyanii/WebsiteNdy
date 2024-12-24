const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
}