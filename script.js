// Select DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    // Retrieve and trim the task text
    const taskText = taskInput.value.trim();
    
    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement('li');
    
    // Set the task text
    li.textContent = taskText;
    
    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';
    
    // Add click event to remove button
    removeButton.onclick = function() {
        taskList.removeChild(li);
    };

    // Append elements
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Event listener for add button
addButton.addEventListener('click', addTask);

// Event listener for Enter key in input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});