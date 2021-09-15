// Доработать todo-list из 12 урока:
//  - Добавить к каждому элементу в списке две кнопки:
//    - кнопка 'Готово' - окрашивает элемент в зеленый цвет, при нажатии повторно убирает зеленый цвет
//    - кнопка 'Удалить' - удаляет элемент
// Обработка событий должна быть сделана через делегирование

const list = document.querySelector('#list');
const input = document.querySelector('#mainField');
const button = document.querySelector('button');

const CLASS_DELETE_BTN = 'delete-btn';
const CLASS_DONE_BTN = 'done-btn';
const CLASS_DONE = 'done'
const ourTemplate = `
    <span class='done-btn'>[v]</span>
    <span class='delete-btn'>[x]</span>
`;
const element = 'element';
const sublist = 'sublist';
const div = 'div';

button.addEventListener('click', onAddTaskClick);
list.addEventListener('click', onListClick);

function onAddTaskClick() {
    if (input.value) {
        const div_sublist = document.createElement('div');
        div_sublist.classList.add(sublist);
        const div = document.createElement('div');
        div.classList.add(element);
        div.innerText = input.value;
        list.append(div);
        list.insertAdjacentHTML('beforeend', ourTemplate);
        input.value = "";
    }
}

function onListClick(e) {
    if (e.target.classList.contains(CLASS_DELETE_BTN)) {
        e.target.closest(element).remove();
        return;
    }
    if (e.target.classList.contains(CLASS_DONE_BTN)) {
        e.target.closest(element).toggle(CLASS_DONE);
    }
}

