// Есть таблица:
// Имя | фамилия | номер телефона | (кнопка удалить - необязательно)
// под формой три инпута соответственно, и конопка добавить.
// При нажатии на кнопку контакты добавляются в таблицу и инпуты очищаются
// Добавить валидацию для трех инпутов. Валидация должна отрабатывать при нажатии на кнопку 'Добавить'. 
// Если один из инпутов невалидный показывать алерт с соответствующим сообщением об ошибке и ничего не добавлять.
// Имя и фамилия - обязательное поле, (только буквы и пробельные символы - необязательно)
// Номер телефона - обязательное поле, только цифры


const inputName = document.querySelector('[name ="name"]');
const inputSurname = document.querySelector('[name ="surname"]');
const inputPhone = document.querySelector('[name ="phone"]');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (inputName.value && inputSurname.value && inputPhone.value) {
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');

        li1.innerText = inputName.value;
        li2.innerText = inputSurname.value;
        li3.innerText = inputPhone.value;

        result.append(li1);
        result.append(li2);
        result.append(li3);

        inputName.value = "";
        inputSurname.value = "";
        inputPhone.value = "";
    } else alert('error')
});
