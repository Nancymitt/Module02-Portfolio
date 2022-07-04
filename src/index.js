
import './styles/main.scss';

//popup
const openPopup = document.querySelectorAll('.open-popup');
const popup = document.querySelectorAll('.popup');

const body = document.body;

function openModal(elem) {
   elem.classList.add('is-active');
   body.classList.add('locked');
}

function closeModal(e) {
   if (e.target.classList.contains('popup-close') || e.target.classList.contains('blackout') || e.target.classList.contains('blackout-menu') || e.target.classList.contains('modal-nav__link')) {
      e.target.closest('.popup').classList.remove('is-active');
      body.classList.remove('locked');
   }
   
}

openPopup.forEach(btn => {
   btn.addEventListener('click', (e) => {
      let data = e.target.dataset.name;

      popup.forEach(modal => {
         if (modal.dataset.modal == data) {
            openModal(modal);
         }
      }) 
      
   })
})

popup.forEach(modal => {
   modal.addEventListener('click', e => closeModal(e))
});

window.addEventListener('keydown', e => {
   popup.forEach(modal => {
      if (e.key === "Escape" && modal.classList.contains('is-active'))
         modal.classList.remove('is-active');
         body.classList.remove('locked');
   })
})
     
// dropdown

document.querySelectorAll('.dropdown').forEach(function (dd) {


   const dropDownMenu = dd.querySelector('.dropdown-menu');
   const dropDownBtn = dd.querySelector('.dropdown__btn');
   const dropDownItems = dropDownMenu.querySelectorAll('.dropdown__item');
   const dropDownInput = dd.querySelector('.dropdown__input-hidden');
   const dropDownArrow = dd.querySelector('.dropdown__arrow');

   // Клик по кнопке - открытие/закрытие дропдауна
   dropDownBtn.addEventListener('click', function () {
       dropDownMenu.classList.toggle('dropdown-menu_visible');
   });

    // Выбор элемента из списка / изменить активное / закрытие дропдауна

   dropDownItems.forEach(function (listItem) {
       listItem.addEventListener('click', function (e) {
           e.stopPropagation();
           dropDownBtn.innerText = this.innerText;
           dropDownInput.value = this.dataset.value;
           dropDownMenu.classList.remove('dropdown-menu_visible');
           dropDownArrow.classList.remove('arrow-active');
       })
   })

   // Клик снаружи дропдауна. Закрытие дропдауна
   document.addEventListener('click', function (e) {
       if (e.target !== dropDownBtn) {
           dropDownMenu.classList.remove('dropdown-menu_visible');
           dropDownArrow.classList.remove('arrow-active');
       }
   })

   // Клик по кнопке - разворот стрелки
   dropDownBtn.addEventListener('click', function () {
       dropDownArrow.classList.toggle('arrow-active');
   });

}); 

// Smooth Scroll
const links = document.querySelectorAll(".header__link");

for (const link of links) {
   link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
   e.preventDefault();
   const href = this.getAttribute("href");

   document.querySelector(href).scrollIntoView({
      behavior: "smooth"
   });
}