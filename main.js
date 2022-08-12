const navItem = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

const openNav = () => {
  nav__items.style.display = 'flex';
}

openNavBtn.addEventListener('click', openNav);
