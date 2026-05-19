function addTask() {

    // Get input box value
    let input = document.getElementById("taskInput");

    // Remove extra spaces
    let taskText = input.value.trim();

    // Check empty input
    if(taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Add task text and delete button
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    // Add task to list
    document.getElementById("taskList").appendChild(li);

    // Clear input field
    input.value = "";
}

function deleteTask(button) {

    // Remove selected task
    button.parentElement.remove();
}