// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const inputField = document.querySelector('input[type="text"]');
const addBtn = document.querySelector('.add-btn');

function createTodoElement(todoItem) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${todoItem.id}`;
  checkbox.checked = todoItem.completed;

  checkbox.addEventListener('change', event => {
    todoItem.completed = event.target.checked;
    console.log('Taulukko päivitetty (tila muuttui):', todoList);
  });

  const label = document.createElement('label');
  label.htmlFor = `todo-${todoItem.id}`;
  label.textContent = todoItem.task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', () => {
    const index = todoList.findIndex(item => item.id === todoItem.id);
    if (index !== -1) {
      todoList.splice(index, 1);
    }

    ul.removeChild(li);

    console.log('Taulukko päivitetty (alkio poistettiin):', todoList);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  ul.appendChild(li);
}

todoList.forEach(todoItem => {
  createTodoElement(todoItem);
});

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const taskName = inputField.value.trim();

  if (taskName !== '') {
    const newId =
      todoList.length > 0 ? Math.max(...todoList.map(t => t.id)) + 1 : 1;

    const newTodo = {
      id: newId,
      task: taskName,
      completed: false,
    };

    todoList.push(newTodo);
    console.log('Taulukko päivitetty (uusi lisättiin):', todoList);

    createTodoElement(newTodo);

    inputField.value = '';
    dialog.close();
  }
});
