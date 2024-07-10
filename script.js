document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        const todoItem = document.createElement('li');
        todoItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            todoItem.style.textDecoration = 'line-through';
        });

        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
});
