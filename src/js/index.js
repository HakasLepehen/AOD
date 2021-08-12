import "normalize.css";
import "../scss/style.scss";
import "../img/bg_main.jpg";
import "./ibg";
import "../img/logo.png";
import '../img/generation/01.png';
import '../img/brands/bicycle-company-logo.png';
import '../img/brands/01.jpeg';
import '../img/brands/02.jpg';
import '../img/brands/vintage-oliva-logo.png';

document.querySelector(".wrapper").classList.add("loaded");

document.addEventListener("DOMContentLoaded", (e) => {
    const header = document.querySelector(".header__menu");
    const icon = document.querySelector('.menu__icon');
    const body = document.querySelector('.menu__body');
    header.addEventListener("click", () => {
      header.classList.toggle('active');
      icon.classList.toggle('active');
      body.classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
    });
  });
  
