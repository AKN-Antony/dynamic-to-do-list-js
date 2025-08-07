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

        // Create new li element
        const li = document.createElement('li');
        // Set its textContent to taskText
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign onclick event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeButton);
        // Append li to taskList
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
