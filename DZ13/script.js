// 1. Переделать или создать новую репу
// front-end-pro
// /12-home-work
// домашка - в отдельной ветке
// как сделали - НЕ мерджите, а создаете пулреквест в ветку master и скидываете мне на ревью ссылку на пулреквест в комменте в LMS

// 2. to-do list
// На странице находится инпут и кнопка.
// Пользователь может ввести что-то в инпут и нажать на кнопку,
// после этого в списке выше должна отобразится строка с тем что было введено в инпуте.
// После этого инпут очищается
// Добавить валидацию чтоб с пустым инпутом ничего не добавлялось



const input = document.querySelector('[name ="myinput"]');
const button = document.querySelector('button');
const ul = document.createElement('ul');
document.body.prepend(ul);

button.addEventListener('click', () => {
    if (input.value != false) {
        const li = document.createElement('li');
        li.innerText = input.value;
        ul.append(li);
        input.value = " ";
    } else return;
});



