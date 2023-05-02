const hamburgerMenuCheckbox = document.getElementById(
  'hamburger-menu__checkbox',
);
[...document.getElementsByClassName('menu__link')].forEach((a) =>
  a.addEventListener('click', () => (hamburgerMenuCheckbox.checked = false)),
);

[...document.getElementsByTagName('form')].forEach((form) =>
  form.addEventListener('submit', (event) => event.preventDefault()),
);
