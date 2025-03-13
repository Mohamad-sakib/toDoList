class taskController {
  constructor(model) {
    this.model = model;
    // this.view = view;
    document.getElementById("add-btn").addEventListener("click", () => {
      const task = document.getElementById("task");
      if (task.value === "") return;
      this.model.addNewTask(task.value);
      displayNewList(this.model.updatedTaskList());
      task.value = "";
    });
  }
}

class ToDoList {
  #taskList;
  #newTaskId;

  constructor() {
    this.#taskList = {};
    this.#newTaskId = 1;
  }

  addNewTask(task) {
    this.#taskList[this.#newTaskId] = task;
  }

  updatedTaskList() {
    return this.#taskList;
  }

  deleteTask(taskId) {
    delete this.#taskList[taskId];
  }
}

//view
const displayNewList = (tasks) => {
  const display = document.getElementById("display");
  const taskElement = document.createElement("div");
  const newTask = tasks.at(-1);
  taskElement.innerHTML = `<span>${newTask}</span> <input type="checkbox"> `;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = `delete`;
  display.appendChild(taskElement);
  taskElement.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    taskElement.remove();
  });
};

const toDoList = new ToDoList();
// const view = new View();
// const controller = new taskController(toDoList);
