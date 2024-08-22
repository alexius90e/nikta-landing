const headerBurgerButton = document.querySelector('.header__burger-button');
const mainMenu = document.querySelector('.main-menu');

function showMenu() {
  if (headerBurgerButton && mainMenu) {
    mainMenu.classList.add('active');
    document.body.classList.add('hidden_md');
  }
}

function hideMenu() {
  if (headerBurgerButton && mainMenu) {
    mainMenu.classList.remove('active');
    document.body.classList.remove('hidden_md');
  }
}

if (headerBurgerButton && mainMenu) {
  headerBurgerButton.addEventListener('click', () => showMenu());

  mainMenu.addEventListener('click', (event) => {
    const isMenu = event.currentTarget === event.target;
    const isNavLink = event.target.classList.contains('main-menu__nav-link');
    const isClose = event.target.classList.contains('main-menu__close');
    const isLogin = event.target.classList.contains('main-menu__login-button');
    if (isMenu || isNavLink || isClose || isLogin) hideMenu();
  });
}
