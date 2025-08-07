document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Validate input
        if (!taskText) {
            alert('Please enter a task!');
            return;
        }

        // Create new task item
        const taskItem = document.createElement('li');
        
        // Create task text span
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        
        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Add click event to remove button
        removeBtn.addEventListener('click', function() {
            taskItem.remove();
            saveTasks();
        });

        // Add click event to mark task as complete
        taskTextSpan.addEventListener('click', function() {
            taskTextSpan.classList.toggle('completed');
            saveTasks();
        });

        // Append elements
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';
        taskInput.focus();

        // Save tasks to localStorage
        saveTasks();
    }

    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li span').forEach(task => {
            tasks.push({
                text: task.textContent,
                completed: task.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            JSON.parse(savedTasks).forEach(task => {
                // Create new task item
                const taskItem = document.createElement('li');
                
                // Create task text span
                const taskTextSpan = document.createElement('span');
                taskTextSpan.textContent = task.text;
                if (task.completed) {
                    taskTextSpan.classList.add('completed');
                }
                
                // Create remove button
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.className = 'remove-btn';
                
                // Add click event to remove button
                removeBtn.addEventListener('click', function() {
                    taskItem.remove();
                    saveTasks();
                });

                // Add click event to mark task as complete
                taskTextSpan.addEventListener('click', function() {
                    taskTextSpan.classList.toggle('completed');
                    saveTasks();
                });

                // Append elements
                taskItem.appendChild(taskTextSpan);
                taskItem.appendChild(removeBtn);
                taskList.appendChild(taskItem);
            });
        }
    }

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when page loads
    loadTasks();
});