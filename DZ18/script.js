'use strict'

/* Сеть фастфудов предлагает несколько видов гамбургеров:

маленький (50 тугриков, 20 калорий)
средний (75 тугриковб 30 каллорий)
большой (100 тугриков, 40 калорий)

Гамбургер может быть с одним из нескольких видов начинок:

сыром (+ 10 тугриков, + 20 калорий)
салатом (+ 20 тугриков, + 5 калорий)
картофелем (+ 15 тугриков, + 10 калорий)
посыпать приправой (+ 15 тугриков, 0 калорий)
полить майонезом (+ 20 тугриков, + 5 калорий).

При этом начинок можно добавить несколько или не быть совсем

Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход
(подсказка: нужен класс Гамбургер, статические константы, методы для выбора опций и расчета нужных величин).

Все константы дожны быть статическими свойствами функции конструктора.
Все методы нужно положить в прототип.

Пример работы кода:

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log("Price with sauce: “ + hamburger.getPrice());
console.log("Callories with sauce: “ + hamburger.getCallories());
 */


const BURGER_SMALL = document.querySelector('.small');
const BURGER_MIDDLE = document.querySelector('.middle');
const BURGER_BIG = document.querySelector('.big');
const CHEESE = document.querySelector('.cheese');
const SALAD = document.querySelector('.salad');
const POTATO = document.querySelector('.potato');
const SEASONING = document.querySelector('.seasoning');
const MAYONNAISE = document.querySelector('.mayonnaise');
const btn = document.querySelector('#btn');
const price = document.querySelector('.prise');
const callories = document.querySelector('.callories');

const SMALLPRISE = 50;
const MIDDLEPRISE = 75;
const BIGPRISE = 100;
const CHEESEPRISE = 10;
const SALADPRISE = 20;
const POTATOPRISE = 15;
const SEASONINGPRISE = 15;
const MAYONNAISEPRISE = 20;

const SMALLCALLORIES = 20;
const MIDDLECALLORIES = 30;
const BIGCALLORIES = 40;
const CHEESECALLORIES = 20;
const SALADCALLORIES = 5;
const POTATOCALLORIES = 10;
const SEASONINGCALLORIES = 0;
const MAYONNAISECALLORIES = 5;

function Gamburger(size, additional) {
    this.size = size;
    this.additional = additional;
}

Gamburger.prototype.burgerPrice = function () {
    let burgPrice = 0;
    if (this.size == 'small') { burgPrice += Gamburger.SMALLPRISE; }
    if (this.size == 'middle') { burgPrice += Gamburger.MIDDLEPRISE; }
    if (this.size == 'big') { burgPrice += Gamburger.BIGPRISE; }
    return burgPrice;
}

Gamburger.prototype.plusAdd = function () {
    let addPrise = 0;
    if (this.additional == 'cheese') { addPrise += Gamburger.CHEESEPRISE; }
    if (this.additional == 'salad') { addPrise += Gamburger.SALADPRISE; }
    if (this.additional == 'potato') { addPrise += Gamburger.POTATOPRISE; }
    if (this.additional == 'seasoning') { addPrise += Gamburger.SEASONINGPRISE; }
    if (this.additional == 'mayonnaise') { addPrise += Gamburger.MAYONNAISEPRISE; }
    return addPrise;
}

Gamburger.prototype.calculatePrice = function () {
    return burgPrise + addPrise;
}

let burger = new Gamburger();
burger.burgerPrice(SMALLPRISE);
burger.plusAdd(CHEESEPRISE);
burger.calculatePrice(SMALLPRISE, CHEESEPRISE);

btn.addEventListener('click', function () {
    price.innerHTML = "Burger cost " + burger.calculatePrice() + "$";
    console.log(burgPrice + addPrise);
})

