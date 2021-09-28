const menuOpenBtn = document.getElementById('menu-hamburger');
const menuCloseBtn = document.getElementById('menu-close');

function toggleMenu() {
  document.querySelector('.mobile-menu').classList.toggle('menu-open');
}

menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);
