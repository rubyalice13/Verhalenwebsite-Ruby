/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var btnFilter = document.getElementsByName('btn-filter')[0];
var btnProfile = document.getElementsByName('btn-profile')[0];

function openNav(id) {
    var nav = document.getElementById(id);
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
    } else {
        nav.classList.add('open');
    }
}

btnFilter.addEventListener('click', function() {
    openNav('filter');
}, false);

btnProfile.addEventListener('click', function() {
    openNav('profile');
}, false);

// toggle between login and signup

var btnLogin = document.getElementsByName('login')[0];
var btnSignup = document.getElementsByName('signup')[0];

var login = document.getElementById('login');
var signup = document.getElementById('signup');

function openLogin() {
    login.style.display = 'block';
    signup.style.display = 'none';
    this.classList.add('active');
    btnSignup.classList.remove('active');
}
btnLogin.addEventListener('click', openLogin, false);

function openSignup() {
    login.style.display = 'none';
    signup.style.display = 'block';
    this.classList.add('active');
    btnLogin.classList.remove('active');
}
btnSignup.addEventListener('click', openSignup, false);

// sorteeropties

var sorteerBtns = document.getElementsByName('sorteer');

for (var i = 0; i < sorteerBtns.length; i++) {
    function toggleSorteren() {
        sorteerBtns[0].classList.remove('active');
        sorteerBtns[1].classList.remove('active');
        sorteerBtns[2].classList.remove('active');
        this.classList.add('active');
    }
    sorteerBtns[i].addEventListener('click', toggleSorteren, false);
};
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}
