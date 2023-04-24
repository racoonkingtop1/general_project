let body = document.querySelector(`#body`);
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
    
    if (!(burgerMenu.classList.contains(`w0`))) {
        body.classList.add(`body_scrollbar_none`);
        console.log(`f`)
    } else {
        body.classList.remove(`body_scrollbar_none`)
    }
});
