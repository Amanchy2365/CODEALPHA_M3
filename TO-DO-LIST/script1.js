const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalTasksCount = document.getElementById('totalTasks');
const pendingTasksCount = document.getElementById('pendingTasks');
const completedTasksCount = document.getElementById('completedTasks');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        // Task Name
        const taskName = document.createElement('div');
        taskName.classList.add('task-name');
        taskName.textContent = task.text;

        // Task Status
        const taskStatus = document.createElement('div');
        taskStatus.classList.add('task-status');
        const statusButton = document.createElement('button');
        statusButton.textContent = task.completed ? 'Complete' : 'Incomplete';
        statusButton.addEventListener('click', () => toggleComplete(index));
        taskStatus.appendChild(statusButton);

        // Edit and Delete Buttons
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(index));
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));
        buttonsContainer.appendChild(editButton);
        buttonsContainer.appendChild(deleteButton);

        taskItem.appendChild(taskName);
        taskItem.appendChild(taskStatus);
        taskItem.appendChild(buttonsContainer);
        
        taskList.appendChild(taskItem);
    });

    updateTaskCount();
}

function updateTaskCount() {
    totalTasksCount.textContent = tasks.length;
    const pendingCount = tasks.filter(task => !task.completed).length;
    pendingTasksCount.textContent = pendingCount;
    completedTasksCount.textContent = tasks.length - pendingCount;
}

function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        inputBox.value = '';
    }
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const newText = prompt('Edit task:', tasks[index].text);
    if (newText !== null && newText.trim() !== '') {
        tasks[index].text = newText.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

addBtn.addEventListener('click', addTask);
renderTasks();
