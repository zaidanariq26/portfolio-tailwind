// Hamburger Icon
const hamburger = document.querySelector('#hamburger-btn');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
   hamburger.classList.toggle('hamburger-active');
   navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function () {
   const header = document.querySelector('header');
   const navFix = header.offsetTop;

   if (window.pageYOffset > navFix) {
      header.classList.add('navbar-fixed');
   } else {
      header.classList.remove('navbar-fixed');
   }
};
