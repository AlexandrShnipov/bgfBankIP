"use strict";


// form
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

  for (let i = 0; i < navLink.length; i++){
        if (document.documentElement.scrollTop >= 500){
          navLink[i].classList.add('text--dark');
        }
        else{
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

