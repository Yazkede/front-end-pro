'use strict'

/**
 * Создать функцию калькулятор которая умеет
 * прибавлять, вычитать, устанавливать новое 
 * базовое знаячение и возвращать значение.
 * 
 * Если вместо числа передается что-то другое, например строка
 * - возвращать NaN и ничего не делать
 */


function CreateCalculator(base) {
    this.base = base;

    this.add = function (b) {
        if (isNumber(b)) {
            return base += b;
        }
        return NaN;
    }
    this.sub = function (b) {
        if (isNumber(b)) {
            return base -= b;
        }
        return NaN;
    }
    this.set = function (b) {
        if (isNumber(b)) {
            base = b;
        }
    }
    this.get = function (b) {
        return b = base;
    }
}

function isNumber(num) {
    if (typeof num === 'number') {
        return num;
    }
}

const calculator = new CreateCalculator(100);

console.log(calculator.add(10)); // 110
console.log(calculator.add(10)); // 120
console.log(calculator.sub(20)); // 100
(calculator.set(20)); // 
console.log(calculator.add(10)); // 30
console.log(calculator.add(10)); // 40
console.log(calculator.add('qwe')); // NaN и значение 40 не менять
console.log(calculator.get());// 40 

