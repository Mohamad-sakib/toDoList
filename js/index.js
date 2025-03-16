class ToDoList {
  #taskList;
  #newTaskId;

  constructor() {
    this.#taskList = {};
    this.#newTaskId = 1;
  }

  addNewTask(task) {
    console.log(task);
    this.#taskList[this.#newTaskId] = task;
    this.#newTaskId += 1;
    this.display();
    return this.#newTaskId - 1;
  }

  updatedTaskList() {
    return this.#taskList;
  }

  deleteTask(taskId) {
    delete this.#taskList[taskId];
    this.display();
  }

  display() {
    console.log(this.#taskList);
  }
}

const deleteTask = (event) => {
  const target = event.target;
  const taskElement = event.currentTarget;
  const id = taskElement.id;
  if ([...target.classList].includes("delete-btn")) {
    taskElement.remove();
    toDoList.deleteTask(id);
  }
};

// //view
const displayNewList = (tasks, taskId) => {
  const display = document.getElementById("display");
  const taskElement = document.createElement("div");
  const newTask = tasks[taskId];
  taskElement.innerHTML = `<span>${newTask}</span> <input type="checkbox"> `;
  taskElement.id = taskId;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = `delete`;
  deleteBtn.classList.add("delete-btn");
  display.appendChild(taskElement);
  taskElement.appendChild(deleteBtn);
  taskElement.addEventListener("click", deleteTask);
};

const toDoList = new ToDoList();

window.addEventListener("load", function () {
  document.getElementById("add-btn").addEventListener("click", () => {
    const taskField = document.getElementById("task-field");

    if (taskField.value === "") return;
    const newTaskId = toDoList.addNewTask(taskField.value);
    displayNewList(toDoList.updatedTaskList(), newTaskId);
    taskField.value = "";
  });
});
