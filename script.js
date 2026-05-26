const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    taskList.appendChild(li);

    taskInput.value = "";
});

taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addButton.click();
    }
});