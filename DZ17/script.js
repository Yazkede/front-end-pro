let offset = 0;
const SLIDER_BOX = document.querySelector('.slider__box');
const PREV_BTN = document.querySelector('.slider__button-prev');
const NEXT_BTN = document.querySelector('.slider__button-next');

PREV_BTN.addEventListener('click', onPrevBtnClick);
NEXT_BTN.addEventListener('click', onNextBtnClick);
SLIDER_BOX.addEventListener('wheel', onPrevBtnClick)

function onPrevBtnClick() {
    offset -= 250;
    if (offset < 0) {
        offset = 1000;
    }
    SLIDER_BOX.style.left = -offset + 'px';
}
function onNextBtnClick() {
    offset += 250;
    if (offset > 1000) {
        offset = 0;
    }
    SLIDER_BOX.style.left = -offset + 'px';
}
