"use strict";

// modal
const noScroll = document.querySelector('body');
const buttonActivation = document.querySelectorAll('[data--button-modal-activation]');
console.log(buttonActivation);
const modalWrap = document.querySelector('[data--modal-wrap]');
const modal = document.querySelector('[data--modal]');
const modalContent = document.querySelector('[data--modal-content]');
const modalContentThanks = document.querySelector('[data--modal-content-thanks]');
const buttonClose = document.querySelector('[data--button-modal-close]');
const buttonModalThanks = document.querySelector('[data--button-modal-thanks]');
const $modalContent = document.querySelector('[data--modal-content]');
const $modalContentThanks = document.querySelector('[data--modal-content-thanks]');

const modalActivation = () => {
  modalWrap.classList.add('open');
  noScroll.classList.add('no-scroll');
}

const modalClose = () => {
  modalWrap.classList.remove('open');
  noScroll.classList.remove('no-scroll');
  $modalContentThanks.classList.remove('open');
  $modalContent.classList.remove('none');
  console.log('click')
}

for (let i = 0; i < buttonActivation.length; i++) {
  buttonActivation[i].addEventListener('click', modalActivation);
}

buttonClose.addEventListener('click', modalClose);
modalWrap.addEventListener('click', modalClose);
buttonModalThanks.addEventListener('click', modalClose);

modal.addEventListener('click', (e) => {
  e.stopPropagation();
})

//! form
console.log($modalContent, $modalContentThanks);
$(document).ready(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      //Change
      data: th.serialize()
    }).done(function () {
      // alert("Thank you!");
      $modalContentThanks.classList.add('open');
      $modalContent.classList.add('none');
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

//scroll
let headerScroll = document.querySelector('[data--header]');
let logoImg = document.querySelector('[data--logo]');
let logoImgScroll = document.querySelector('[data--logo-scroll]');
let navLink = document.querySelectorAll('[data--nav-link]');
console.log(navLink);
let iconTelLight = document.querySelector('[data--icon-tel-light]');
let iconTelDark = document.querySelector('[data--icon-tel-dark]');
let goTop = document.querySelector('[data--go-top]');

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    goTop.style.display = 'grid';
    console.log(document.documentElement.scrollTop)
    headerScroll.classList.add('header--scroll');
    logoImg.classList.add('hidden');
    logoImgScroll.classList.add('active');
    iconTelLight.classList.add('hidden');
    iconTelDark.classList.add('active');
  }
  else {
    goTop.style.display = 'none'
    headerScroll.classList.remove('header--scroll');
    logoImg.classList.remove('hidden');
    logoImgScroll.classList.remove('active');
    iconTelLight.classList.remove('hidden');
    iconTelDark.classList.remove('active');
  }

  for (let i = 0; i < navLink.length; i++) {
    if (document.documentElement.scrollTop >= 500) {
      navLink[i].classList.add('text--dark');
    }
    else {
      navLink[i].classList.remove('text--dark');
    }
  }
})

let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    let blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: 'start'
    })
  })
}

// ! calculator
const rangeOne = document.querySelector('[data--range-one]');
const rangeTwo = document.querySelector('[data--range-two]');
let rangeOneValue = rangeOne.value;
let rangeTwoValue = rangeTwo.value;
const rangeLabelOne = document.querySelector('[data--range-label-one]');
const rangeLabelTwo = document.querySelector('[data--range-label-two]');
const resultFinish = document.querySelector('[data--calculator-result]');


rangeOne.addEventListener("input", e => {
  const valueOne = e.target.value;
  rangeOneValue = e.target.value;
  rangeLabelOne.innerHTML = valueOne.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const result = countResult(valueOne, rangeTwoValue);
  resultFinish.innerHTML = result;
});

rangeTwo.addEventListener("input", e => {
  const valueTwo = e.target.value;
  rangeTwoValue = e.target.value;
  rangeLabelTwo.innerHTML = valueTwo;
  const result = countResult(rangeOneValue, valueTwo);
  resultFinish.innerHTML = result;
});


const countResult = (a, b) => {
  return ((Number(a) / Number(b)).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, " "); // округляет до двух знаков и ставит пробелы между тысячами

  // округление до двух знаков
  //return  (Math.round((Number(a) / Number(b)) * 100)) / 100;

  //округление до двух знаков и ставит пробелы между числами
  // let finish = Number(a) / Number(b);
  // return (finish.toFixed(2) + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");

}

//!burger
const burgerButton = document.querySelector('[data--burger-button]');
const burgerMenu = document.querySelector('[data--burger-menu]');
const burgerMenuWrap = document.querySelector('[ data--burger-menu-wrap]')
//console.log(burgerButton, burger)

const toggleBurgerMenu = () => {
  burgerMenu.classList.toggle('active');
  console.log('click')
}

const closedBurgerMenu = e => {
  const target = e.target
  if (!target.closest('[data--burger-menu]') && !target.closest('[data--burger-button]')) {
    burgerMenu.classList.remove('active');
  }
}

const clickElementForClosedBurgerMenu = (el) => {
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      console.log('click')
    })
  }
}

burgerButton.addEventListener('click', toggleBurgerMenu);
burgerMenuWrap.addEventListener('click', closedBurgerMenu);
clickElementForClosedBurgerMenu(navLink);









