document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoDueDate = document.getElementById('todo-due-date');
    const todoPriority = document.getElementById('todo-priority');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTodo(todoInput.value, todoDueDate.value, todoPriority.value);
        todoInput.value = '';
        todoDueDate.value = '';
        todoPriority.value = 'low';
    });

    function addTodo(task, dueDate, priority) {
        const todoItem = document.createElement('li');
        todoItem.classList.add(`priority-${priority}`);

        const taskSpan = document.createElement('span');
        taskSpan.textContent = task;
        todoItem.appendChild(taskSpan);

        if (dueDate) {
            const dueDateSpan = document.createElement('span');
            dueDateSpan.textContent = `Due: ${dueDate}`;
            dueDateSpan.style.marginLeft = '10px';
            todoItem.appendChild(dueDateSpan);
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            todoItem.style.textDecoration = 'line-through';
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
});
