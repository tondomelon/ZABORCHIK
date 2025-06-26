const button = document.querySelector('.header__menusocialmed-button_Menu');
const menu = document.querySelector('.dropdown-menu');

// Открытие/закрытие по клику на кнопку
button.addEventListener('click', (e) => {
  e.stopPropagation(); // Предотвращаем всплытие
  menu.classList.toggle('show');
});

// Закрытие при клике вне меню
document.addEventListener('click', () => {
  menu.classList.remove('show');
});

// Предотвращаем закрытие при клике внутри меню
menu.addEventListener('click', (e) => {
  e.stopPropagation();
});