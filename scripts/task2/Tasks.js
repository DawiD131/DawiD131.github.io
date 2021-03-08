class Tasks {
  constructor(...params) {
    [
      this.tasksWrapper,
      this.countOfAllTasksField,
      this.countOfCompletedTasksField,
      this.countOfUncompletedTasksField,
    ] = params;
  }

  initializeTasks = () => {
    const retrievedObject = JSON.parse(localStorage.getItem("Tasks"));
    if (retrievedObject === null) {
      localStorage.setItem("Tasks", JSON.stringify([]));
    } else {
      this.setTasks(retrievedObject, null);
    }
  };

  countOfAllTasks = (tasks) => {
    this.countOfAllTasksField.innerText = tasks.length;
  };

  countOfCompletedTasks = (tasks) => {
    this.countOfCompletedTasksField.innerText = tasks.filter(
      (task) => task.isComplete
    ).length;
  };

  countOfUncompletedTasks = (tasks) => {
    this.countOfUncompletedTasksField.innerText = tasks.filter(
      (task) => !task.isComplete
    ).length;
  };

  getAllTasks = () => {
    this.drawFilteredTask(JSON.parse(localStorage.getItem("Tasks")), "all");
  };

  getCompletedTasks = () => {
    this.drawFilteredTask(
      JSON.parse(localStorage.getItem("Tasks")),
      "completed"
    );
  };

  getUncomletedTasks = () => {
    this.drawFilteredTask(
      JSON.parse(localStorage.getItem("Tasks")),
      "uncompleted"
    );
  };

  addNewTask = (currentUser, textAreaValue) => {
    const retrievedObject = JSON.parse(localStorage.getItem("Tasks"));

    this.setTasks(retrievedObject, {
      img: currentUser.photo,
      name: `${currentUser.name} ${currentUser.lastName}`,
      date: formatDate(new Date(), "."),
      description: textAreaValue,
      isComplete: false,
    });
  };

  setTasks = (retrievedTasks, newTask) => {
    const newTasksList = newTask
      ? [...retrievedTasks, newTask]
      : retrievedTasks;
    this.countOfAllTasks(newTasksList);
    this.countOfCompletedTasks(newTasksList);
    this.countOfUncompletedTasks(newTasksList);
    localStorage.setItem("Tasks", JSON.stringify(newTasksList));
    if (this.tasksWrapper.childElementCount > 0) {
      this.tasksWrapper.textContent = "";
    }
    this.makeTasksTiles(newTasksList);
  };

  drawFilteredTask = (tasks, filterType) => {
    switch (filterType) {
      case "all":
        this.makeTasksTiles(tasks);
        break;
      case "completed":
        this.makeTasksTiles(tasks.filter((task) => task.isComplete));
        break;
      case "uncompleted":
        this.makeTasksTiles(tasks.filter((task) => !task.isComplete));
        break;
    }
  };

  makeTasksTiles = (tasks) => {
    if (this.tasksWrapper.childElementCount > 0) {
      this.tasksWrapper.textContent = "";
    }
    tasks.forEach((task, index) => {
      this.tasksWrapper.appendChild(
        this.makeTaskTile(
          task.name,
          task.date,
          task.description,
          task.isComplete,
          task.img,
          index
        )
      );
    });
  };

  removeTask = (index) => {
    const retrievedObject = JSON.parse(localStorage.getItem("Tasks"));
    retrievedObject.splice(index, 1);
    localStorage.setItem("Tasks", JSON.stringify(retrievedObject));
    if (this.tasksWrapper.childElementCount > 0) {
      this.tasksWrapper.textContent = "";
    }
    this.setTasks(retrievedObject, null);
  };

  isTaskComplete = (id) => {
    const retrievedObject = JSON.parse(localStorage.getItem("Tasks"));
    const completedTask = retrievedObject.find((task, index) => index === id);
    completedTask.isComplete = !completedTask.isComplete;
    localStorage.setItem("Tasks", JSON.stringify(retrievedObject));
    this.setTasks(retrievedObject, null);
  };

  makeTaskTile = (...params) =>
    TaskTile(...params, this.isTaskComplete, this.removeTask);
}
