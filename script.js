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

        // ===== TASK CREATION AND REMOVAL ===== //
        // Create new li element
        const li = document.createElement('li');
        // Set its textContent to taskText
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        // Set textContent to "Remove"
        removeButton.textContent = "Remove";
        // Give it class name 'remove-btn'
        removeButton.className = 'remove-btn';

        // Assign onclick event to remove button
        removeButton.onclick = function() {
            // Remove the li element from taskList when triggered
            taskList.removeChild(li);
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        // Append the li to taskList
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = "";
        // ===== END TASK CREATION AND REMOVAL ===== //
    }

    // ===== ATTACH EVENT LISTENERS ===== //
    // Add click event listener to addButton
    addButton.addEventListener('click', addTask);

    // Add keypress event listener to taskInput
    taskInput.addEventListener('keypress', function(event) {
        // Check if Enter key was pressed
        if (event.key === 'Enter') {
            // Call addTask if Enter was pressed
            addTask();
        }
    });
    // ===== END EVENT LISTENERS ===== //
});