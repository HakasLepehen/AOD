import "normalize.css";
import "../scss/style.scss";
import "../img/bg_main.jpg";
import "./ibg";
import "../img/logo.png";
import "../img/generation/01.png";
import "../img/brands/bicycle-company-logo.png";
import "../img/brands/01.jpeg";
import "../img/brands/02.jpg";
import "../img/brands/vintage-oliva-logo.png";
import "../img/brands/la-boriosa-logo.png";
import "../img/brands/la-boriosa-img.jpeg";
import "../img/brands/vintage-bicycles-logo.png";
import "../img/brands/since-bicycles.png";
import "../img/brands/mavic.jpeg";
import "../img/brands/hulot-logo.png";
import "../img/brands/twitter-logo.png";
import '../img/shop/01.jpeg';

document.querySelector(".wrapper").classList.add("loaded");

document.addEventListener("DOMContentLoaded", (e) => {
  const header = document.querySelector(".header__menu");
  const icon = document.querySelector(".menu__icon");
  const body = document.querySelector(".menu__body");
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    icon.classList.toggle("active");
    body.classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
  });

  switchSlide();
});

const switchSlide = () => {
  const btns = document.querySelectorAll('.pagination .pagination__list li button');
  let btnActive = document.querySelector('.pagination .pagination__list li button.active');
  const slide = document.querySelector('.slider__block');
  let activeIndex = 1;
  console.log(slide.clientWidth)

  btns.forEach((element, index) => {
    element.addEventListener('click', (event) => {
      activeIndex = -index;
      btnActive.classList.toggle('active');
      btnActive = event.currentTarget;
      event.currentTarget.classList.toggle('active');
      document.querySelector('.slider__block').style.transform = `translateX(${100 * activeIndex}%)`;
    })
  });
}
