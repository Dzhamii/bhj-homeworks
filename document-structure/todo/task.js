document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task__input");
    const addButton = document.getElementById("tasks__add");
    const tasksList = document.getElementById("tasks__list");
  
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter" && taskInput.value.trim() !== "") {
        event.preventDefault();
        addTask(taskInput.value.trim());
        taskInput.value = "";
      }
    });
  
    addButton.addEventListener("click", function () {
      if (taskInput.value.trim() !== "") {
        addTask(taskInput.value.trim());
        taskInput.value = "";
      }
    });
  
    tasksList.addEventListener("click", function (event) {
      if (event.target.classList.contains("task__remove")) {
        event.preventDefault();
        event.target.parentNode.remove();
      }
    });
  
    function addTask(title) {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
  
      const taskTitleElement = document.createElement("div");
      taskTitleElement.classList.add("task__title");
      taskTitleElement.innerText = title;
  
      const removeLink = document.createElement("a");
      removeLink.classList.add("task__remove");
      removeLink.innerHTML = "&times;";
  
      taskElement.appendChild(taskTitleElement);
      taskElement.appendChild(removeLink);
  
      tasksList.appendChild(taskElement);
    }
  });
  