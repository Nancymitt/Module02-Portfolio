
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
     
// select

let select = function() {
   let selectResult = document.querySelectorAll('.select__result');
   let selectItem = document.querySelectorAll('.select__item');

  
   selectResult.forEach(item => {
      item.addEventListener('click', selectToggle) 
   });

   selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
   });

   function selectToggle() {
      this.parentElement.classList.toggle('active');
   };

   function selectChoose() {
      let text = this.innerText,
         select = this.closest('.select'),
         resultText = select.querySelector('.select__result');
      resultText.innerText = text;
      select.classList.remove('active');
   };
  
};

select();

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