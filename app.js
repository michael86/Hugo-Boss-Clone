const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');
const closeNav = document.getElementById('close-nav');

navToggle.addEventListener('click', () => nav.classList.add('show-nav'));
closeNav.addEventListener('click', () => nav.classList.remove('show-nav'));

