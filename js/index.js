const headerBurgerButton = document.querySelector('.header__burger-button');
const headerMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');

function showMenu() {
  if (headerBurgerButton && headerMenu && header) {
    header.classList.add('active');
    headerMenu.classList.add('active');
    document.body.classList.add('hidden_md');
  }
}

function hideMenu() {
  if (headerBurgerButton && headerMenu && header) {
    header.classList.remove('active');
    headerMenu.classList.remove('active');
    document.body.classList.remove('hidden_md');
  }
}

if (headerBurgerButton && headerMenu && header) {
  headerBurgerButton.addEventListener('click', () => showMenu());

  headerMenu.addEventListener('click', (event) => {
    const isNavLink = event.target.classList.contains('header__menu-nav-link');
    const isClose = event.target.classList.contains('header__menu-close');
    if (isNavLink || isClose) hideMenu();
  });

  header.addEventListener('click', (event) => {
    const isHeader = event.target === event.currentTarget;
    if (isHeader) hideMenu();
  });
}
