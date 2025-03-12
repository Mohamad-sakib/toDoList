class taskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    document.getElementById("add-btn").addEventListener("click", () => {
      const task = document.getElementById("task");
      this.model.addNewTask(task.value);
      this.view.displayNewList(this.model.updatedTaskList());
      task.value = "";
    });
  }
}

class Model {
  #taskList;
  constructor() {
    this.#taskList = [];
  }

  addNewTask(task) {
    this.#taskList.push(task);
  }

  updatedTaskList() {
    return this.#taskList;
  }
}

class View {
  displayNewList(tasks) {
    const display = document.getElementById("display");
    const taskElement = document.createElement("div");
    const newTask = tasks.at(-1);
    taskElement.innerHTML = `<p>${newTask}</p>`;
    display.appendChild(taskElement);
  }
}

const model = new Model();
const view = new View();
const controler = new taskController(model, view);
