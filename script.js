document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask function
    function addTask() {
        // Retrieve and trim the value from task input field
        const taskText = taskInput.value.trim();

        // Check if empty and alert if true
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Task Creation and Removal:
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign onclick event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach Event Listeners:
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
