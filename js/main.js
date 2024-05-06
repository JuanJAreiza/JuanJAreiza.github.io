const menuBtn = document.querySelector('.menu_btn');
const menuBtnIcon = document.querySelector('.menu_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

menuBtn.onclick = function () {
     dropDownMenu.classList.toggle('open')
     const isOpen = dropDownMenu.classList.contains('open')

     menuBtnIcon.classList = isOpen
     ? 'fa-solid fa-xmark'
     : 'fa-solid fa-bars'
}