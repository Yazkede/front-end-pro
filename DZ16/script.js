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
        if (typeof b === 'number') {
            base += b;
            console.log(base);
        } else {
            console.log('NaN');
        }
    }
    this.sub = function (b) {
        if (typeof b === 'number') {
            base -= b;
            console.log(base);
        } else {
            console.log('NaN');
        }
    }
    this.set = function (b) {
        if (typeof b === 'number') {
            base = b;
        } else {
            console.log('NaN');
        }
    }
    this.get = function (b) {
        b = base;
        console.log(b);
    }
}

const calculator = new CreateCalculator(100);

calculator.add(10); // 110
calculator.add(10); // 120
calculator.sub(20); // 100
calculator.set(20); // 
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
calculator.get(); // 40 

