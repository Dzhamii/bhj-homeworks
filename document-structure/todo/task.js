document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("task-input");
  const addButton = document.getElementById("add-button");
  const taskList = document.getElementById("task-list");

  addButton.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      input.value = "";
    }
  });

  const form = document.getElementById("task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const taskText = input.value.trim();

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      input.value = "";
    }
  });
});
