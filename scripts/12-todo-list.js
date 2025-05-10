const todoList = [];

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    addEventListenersToDeleteButtons();
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
})

function addEventListenersToDeleteButtons(){
    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });
}
addEventListenersToDeleteButtons()


function addTodo(todo) {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    // todoList.push({name: name, dueDate: dueDate });
    todoList.push({name, dueDate}); //shorthand property
    
    inputElement.value = '';
    renderTodoList();
}