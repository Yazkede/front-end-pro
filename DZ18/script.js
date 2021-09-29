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


function Gamburger(size, additional) {
    this.size = size;
    this.additional = additional;
    Gamburger.SIZE_SMALL = {
        price: 50,
        callories: 20,
    }
    Gamburger.SIZE_MEDIUM = {
        price: 75,
        callories: 30,
    }
    Gamburger.SIZE_BIG = {
        price: 100,
        callories: 40,
    }
    Gamburger.TOPPING_CHEESE = {
        price: 10,
        callories: 20,
    }
    Gamburger.TOPPING_SALAD = {
        price: 20,
        callories: 5,
    }
    Gamburger.TOPPING_POTATO = {
        price: 15,
        callories: 10,
    }
    Gamburger.TOPPING_SEASON = {
        price: 15,
        callories: 0,
    }
    Gamburger.TOPPING_MAYO = {
        price: 20,
        callories: 5,
    }
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

const hamburger = new Gamburger(Gamburger.SIZE_SMALL);
burger.burgerPrice(SMALLPRISE);
burger.plusAdd(CHEESEPRISE);
burger.calculatePrice(SMALLPRISE, CHEESEPRISE);
gamburger.addTopping(Gamburger.TOPPING_MAYO);
gamburger.addTopping(Gamburger.TOPPING_POTATO);

btn.addEventListener('click', function () {
    price.innerHTML = "Burger cost " + burger.calculatePrice() + "$";
    console.log(burgPrice + addPrise);
})

