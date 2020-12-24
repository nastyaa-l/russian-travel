console.log('hr');

let openButton = document.querySelector('.header__popup-open');
let overlay = document.querySelector('.overlay');
let closeButton = overlay.querySelector('.overlay__popup-close');

let togglePopup = () => {
  overlay.classList.toggle('overlay_active');
}
openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click',togglePopup);
overlay.addEventListener('click', (event)=>{
  if (event.target===event.currentTarget){
    togglePopup()}
  }
);
