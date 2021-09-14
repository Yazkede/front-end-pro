// Доработать todo-list из 12 урока:
//  - Добавить к каждому элементу в списке две кнопки:
//    - кнопка 'Готово' - окрашивает элемент в зеленый цвет, при нажатии повторно убирает зеленый цвет
//    - кнопка 'Удалить' - удаляет элемент
// Обработка событий должна быть сделана через делегирование

const list = document.querySelector('#list');
const input = document.querySelector('[name ="myinput"]');
const button = document.querySelector('button');

const CLASS_DELETE_BTN = 'delete-btn';
const CLASS_DONE_BTN = 'done-btn';
const CLASS_DONE = 'done'
const ourTemplate = `
    <span class='done-btn'>[v]</span>
    <span class='delete-btn'>[x]</span>
`;
const element = 'element';

button.addEventListener('click', onAddTaskClick);
list.addEventListener('click', onRemoveTaskClick);
list.addEventListener('click', onDoneTaskClick);

//Кнопки работают не корректно:
//- DONE - красит весь список сразу;
//- DELETE - удаляет всё сразу и больше не добавляет текст в список.
//Что с этим делать - я не могу сообразить.

function onAddTaskClick() {
    if (input.value) {
        const div_sublist = document.createElement('div');
        div_sublist.classList.add('sublist');
        const div = document.createElement('div');
        div.classList.add('element');
        div.innerText = input.value;
        list.append(div);
        list.insertAdjacentHTML('beforeend', ourTemplate);
        input.value = "";
    }
}

function onDoneTaskClick(e) {
    if (e.target.classList.contains(CLASS_DONE_BTN)) {
        list.classList.toggle(CLASS_DONE);
    }
}

function onRemoveTaskClick(e) {
    if (e.target.classList.contains(CLASS_DELETE_BTN)) {
        e.target.parentNode.remove();
    }
}

/*function addDoneButton() {
    li.append(doneButton);
    doneButton.classList.add(CLASS_DONE_BTN);
}

function addDeleteButton() {
    li.append(deleteButton);
    deleteButton.classList.add(CLASS_DELETE_BTN);
}*/

/* const ourTemplate = `
    <li id='element'></li>
    <span class='done'>[v]</span>
    <span class='delete'>[x]</span>
`;
const list = document.querySelector('#list');
const input = document.querySelector('[name ="myinput"]');
const button = document.querySelector('button');
const CLASS_DELETE_BTN = 'delete';
const CLASS_DONE_BTN = 'done';
const CLASS_DONE = '.done';


button.addEventListener('click', onAddTaskClick);
list.addEventListener('click', onDoneTaskClick);
list.addEventListener('click', onRemoveTaskClick);

function onAddTaskClick() {
    if (input.value) {
        list.insertAdjacentHTML('afterbegin', ourTemplate);
        element.innerText = input.value;
        input.value = "";
    }
}

function onDoneTaskClick(e) {
    if (e.target.classList.contains(CLASS_DONE_BTN)) {
        e.target.classlist.toggle(CLASS_DONE);
    }
}

function onRemoveTaskClick(e) {
    if (e.target.classList.contains(CLASS_DELETE_BTN)) {
        e.target.closest(list).remove();
    }
}
 */
