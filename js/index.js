let burgerBtn = document.querySelector(`.burger__btn`);
let burgerBtnImg = document.querySelector(`burger__btn__img`)
let burgerMenu = document.querySelector(`.header__burger`);

burgerBtn.addEventListener(`click`, function(){
    burgerMenu.classList.remove(`w0`);
});

document.addEventListener(`click`, function(evt){
    if (!(evt.target === burgerMenu) && !(evt.target.classList.contains(`burger__btn__img`))){
        burgerMenu.classList.add(`w0`)
    }
});