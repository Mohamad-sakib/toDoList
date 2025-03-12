class taskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    document.getElementById("add-btn").addEventListener("click", () => {
      const task = document.getElementById("task").value;
      this.model.addNewTask(task);
      this.view.displayNewList(this.model.updatedTaskList());
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
    tasks.map((task) => {
      const taskElement = document.createElement("div");
      taskElement.innerHTML = `<p>${task}</p>`;
      display.appendChild(taskElement);
    });
  }
}

// const controler = new taskController(null, null);

const model = new Model();
model.addNewTask("playing basketball");
console.log(model.updatedTaskList());
