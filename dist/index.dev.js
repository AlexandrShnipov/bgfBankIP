"use strict"; // form

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
      alert("Thank you!");
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

  for (var i = 0; i < navLink.length; i++) {
    if (document.documentElement.scrollTop >= 500) {
      navLink[i].classList.add('text--dark');
    } else {
      navLink[i].classList.remove('text--dark');
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
  } // modal

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

var noScroll = document.querySelector('body');
var buttonActivation = document.querySelectorAll('[data--button-modal-activation]');
console.log(buttonActivation);
var modalWrap = document.querySelector('[data--modal-wrap]');
var modal = document.querySelector('[data--modal]');
var buttonClose = document.querySelector('[data--button-modal-close]');

var modalClose = function modalClose() {
  modalWrap.classList.add('hidden');
  noScroll.classList.remove('no-scroll');
  console.log('click');
};

var modalActivation = function modalActivation() {
  modalWrap.classList.add('active');
  modalWrap.classList.remove('hidden');
  noScroll.classList.add('no-scroll');
};

buttonClose.addEventListener('click', modalClose);
modalWrap.addEventListener('click', modalClose);
modal.addEventListener('click', function (e) {
  e.stopPropagation();
});

for (var i = 0; i < buttonActivation.length; i++) {
  buttonActivation[i].addEventListener('click', modalActivation);
}