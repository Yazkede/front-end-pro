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
    this.add(b) {
        if (typeof b === 'number') {
            num += b;
            console.log(num);
        } else {
            console.log('NaN');
        }
    }
    this.sub(b) {
        if (typeof b === 'number') {
            num -= b;
            console.log(num);
        } else {
            console.log('NaN');
        }
    }
    this.set(b) {
        if (typeof b === 'number') {
            num = b;
        } else {
            console.log('NaN');
        }
    }
    this.get() {
        b = num;
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

function createCalculator(a) {
    let num = a;
    return {
        add(b) {
            if (typeof b === 'number') {
                num += b;
                console.log(num);
            } else {
                console.log('NaN');
            }
        },
        sub(b) {
            if (typeof b === 'number') {
                num -= b;
                console.log(num);
            } else {
                console.log('NaN');
            }
        },
        set(b) {
            if (typeof b === 'number') {
                num = b;
            } else {
                console.log('NaN');
            }
        },
        get() {
            b = num;
            console.log(b);
        }
    }
}