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

const maskOptions = {
  mask: '+{7} (000) 000-00-00',
};

const phoneInputClassNames = ['modal__form-input_tel'];

const phoneInputs = phoneInputClassNames
  .map((name) => document.querySelectorAll(`.${name}`))
  .reduce((acc, array) => [...acc, ...array], []);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));

const contactButtons = document.querySelectorAll('.contact');
const contactModal = document.querySelector('.modal_contact');
const contactForm = document.querySelector('.modal_contact .modal__form');

function showModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  document.body.classList.remove('hidden_md');
  document.body.classList.add('hidden');
}

function hideModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  document.body.classList.remove('hidden_md');
  document.body.classList.remove('hidden');
}

contactButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showModal(contactModal);
  });
});

if (contactModal) {
  contactModal.addEventListener('click', (event) => {
    const isModal = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('modal__close');

    if (isModal || isClose) {
      hideModal(event.currentTarget);
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    hideModal(contactModal);
    event.currentTarget.reset();
  });
}
