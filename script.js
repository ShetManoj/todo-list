document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoDueDate = document.getElementById('todo-due-date');
    const todoPriority = document.getElementById('todo-priority');
    const todoList = document.getElementById('todo-list');
    const sortDateButton = document.getElementById('sort-date');
    const sortPriorityButton = document.getElementById('sort-priority');
    
    let todos = [];

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newTodo = {
            task: todoInput.value,
            dueDate: todoDueDate.value,
            priority: todoPriority.value
        };
        todos.push(newTodo);
        renderTodos();
        todoInput.value = '';
        todoDueDate.value = '';
        todoPriority.value = 'low';
    });

    sortDateButton.addEventListener('click', function() {
        todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        renderTodos();
    });

    sortPriorityButton.addEventListener('click', function() {
        const priorityOrder = { low: 1, medium: 2, high: 3 };
        todos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        renderTodos();
    });

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(todo => addTodoElement(todo));
    }

    function addTodoElement({ task, dueDate, priority }) {
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
            todos = todos.filter(t => t.task !== task || t.dueDate !== dueDate || t.priority !== priority);
            renderTodos();
        });

        todoItem.appendChild(completeButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
});
