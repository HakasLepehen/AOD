import "normalize.css";
import "../scss/style.scss";
import "../img/bg_main.jpg";
import "./ibg";
import "../img/logo.png";

document.querySelector(".wrapper").classList.add("loaded");

const iconMenu = document.querySelector(".icon-menu");

iconMenu.addEventListener('click', (e) => {
    const menuBody = document.querySelector('.menu__body');
    const body = document.querySelector('body');

    e.target.classList.add('active');
    menuBody.classList.add('active');
    body.classList.add('lock');
});
