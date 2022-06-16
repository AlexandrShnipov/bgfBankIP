"use strict"; // modal

var noScroll = document.querySelector('body');
var buttonActivation = document.querySelectorAll('[data--button-modal-activation]');
console.log(buttonActivation);
var modalWrap = document.querySelector('[data--modal-wrap]');
var modal = document.querySelector('[data--modal]');
var modalContent = document.querySelector('[data--modal-content]');
var modalContentThanks = document.querySelector('[data--modal-content-thanks]');
var buttonClose = document.querySelector('[data--button-modal-close]');
var buttonModalThanks = document.querySelector('[data--button-modal-thanks]');
var $modalContent = document.querySelector('[data--modal-content]');
var $modalContentThanks = document.querySelector('[data--modal-content-thanks]');

var modalActivation = function modalActivation() {
  modalWrap.classList.add('open');
  noScroll.classList.add('no-scroll');
};

var modalClose = function modalClose() {
  modalWrap.classList.remove('open');
  noScroll.classList.remove('no-scroll');
  $modalContentThanks.classList.remove('open');
  $modalContent.classList.remove('none');
  console.log('click');
};

for (var i = 0; i < buttonActivation.length; i++) {
  buttonActivation[i].addEventListener('click', modalActivation);
}

buttonClose.addEventListener('click', modalClose);
modalWrap.addEventListener('click', modalClose);
buttonModalThanks.addEventListener('click', modalClose);
modal.addEventListener('click', function (e) {
  e.stopPropagation();
}); //! form

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
}); //scroll

var headerScroll = document.querySelector('[data--header]');
var logoImg = document.querySelector('[data--logo]');
var logoImgScroll = document.querySelector('[data--logo-scroll]');
var navLink = document.querySelectorAll('[data--nav-link]');
console.log(navLink);
var iconTelLight = document.querySelector('[data--icon-tel-light]');
var iconTelDark = document.querySelector('[data--icon-tel-dark]');
var goTop = document.querySelector('[data--go-top]');
window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    goTop.style.display = 'grid';
    console.log(document.documentElement.scrollTop);
    headerScroll.classList.add('header--scroll');
    logoImg.classList.add('hidden');
    logoImgScroll.classList.add('active');
    iconTelLight.classList.add('hidden');
    iconTelDark.classList.add('active');
  } else {
    goTop.style.display = 'none';
    headerScroll.classList.remove('header--scroll');
    logoImg.classList.remove('hidden');
    logoImgScroll.classList.remove('active');
    iconTelLight.classList.remove('hidden');
    iconTelDark.classList.remove('active');
  }

  for (var _i = 0; _i < navLink.length; _i++) {
    if (document.documentElement.scrollTop >= 500) {
      navLink[_i].classList.add('text--dark');
    } else {
      navLink[_i].classList.remove('text--dark');
    }
  }
});
var anchors = document.querySelectorAll('a[href*="#"]');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: 'start'
      });
    });
  };

  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  } // ! calculator

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var rangeOne = document.querySelector('[data--range-one]');
var rangeTwo = document.querySelector('[data--range-two]');
var rangeOneValue = rangeOne.value;
var rangeTwoValue = rangeTwo.value;
var rangeLabelOne = document.querySelector('[data--range-label-one]');
var rangeLabelTwo = document.querySelector('[data--range-label-two]');
var resultFinish = document.querySelector('[data--calculator-result]');
rangeOne.addEventListener("input", function (e) {
  var valueOne = e.target.value;
  rangeOneValue = e.target.value;
  rangeLabelOne.innerHTML = valueOne.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  var result = countResult(valueOne, rangeTwoValue);
  resultFinish.innerHTML = result;
});
rangeTwo.addEventListener("input", function (e) {
  var valueTwo = e.target.value;
  rangeTwoValue = e.target.value;
  rangeLabelTwo.innerHTML = valueTwo;
  var result = countResult(rangeOneValue, valueTwo);
  resultFinish.innerHTML = result;
});

var countResult = function countResult(a, b) {
  return (Number(a) / Number(b)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " "); // округляет до двух знаков и ставит пробелы между тысячами
  // округление до двух знаков
  //return  (Math.round((Number(a) / Number(b)) * 100)) / 100;
  //округление до двух знаков и ставит пробелы между числами
  // let finish = Number(a) / Number(b);
  // return (finish.toFixed(2) + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
}; //!burger


var burgerButton = document.querySelector('[data--burger-button]');
var burgerMenu = document.querySelector('[data--burger-menu]');
var burgerMenuWrap = document.querySelector('[ data--burger-menu-wrap]'); //console.log(burgerButton, burger)

var toggleBurgerMenu = function toggleBurgerMenu() {
  burgerMenu.classList.toggle('active');
  console.log('click');
};

var closedBurgerMenu = function closedBurgerMenu(e) {
  var target = e.target;

  if (!target.closest('[data--burger-menu]') && !target.closest('[data--burger-button]')) {
    burgerMenu.classList.remove('active');
  }
};

var clickElementForClosedBurgerMenu = function clickElementForClosedBurgerMenu(el) {
  for (var _i2 = 0; _i2 < el.length; _i2++) {
    el[_i2].addEventListener('click', function () {
      burgerMenu.classList.remove('active');
      console.log('click');
    });
  }
};

burgerButton.addEventListener('click', toggleBurgerMenu);
burgerMenuWrap.addEventListener('click', closedBurgerMenu);
clickElementForClosedBurgerMenu(navLink);