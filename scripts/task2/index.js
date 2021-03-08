// Selectors
const tasksWrapper = document.querySelector(".tasks-wrapper");
const input = document.querySelector("input");
const textArea = document.querySelector("textarea");
const optionsCont = document.querySelector(".options-container");
const addButton = document.querySelector(".add-button");
const taskErrorMessageField = document.querySelector(".task-error-message");
const allTaskButton = document.querySelector(
  ".button-box .primary-btn:nth-child(1)"
);
const completedTaskButton = document.querySelector(
  ".button-box .primary-btn:nth-child(2)"
);
const uncompletedTaskButton = document.querySelector(
  ".button-box .primary-btn:nth-child(3)"
);
const countOfAllTasksField = document.querySelector(
  ".count_of_all_tasks_field"
);
const countOfCompletedTasksField = document.querySelector(
  ".count_of_completed_tasks_field"
);
const countOfUncompletedTasksField = document.querySelector(
  ".count_of_uncompleted_tasks_field"
);

// set current link style
const link = document.querySelector(".navbar__second-link");
link.classList.add("current-page");

//Create new instance of tasks
const tasks = new Tasks(
  tasksWrapper,
  countOfAllTasksField,
  countOfCompletedTasksField,
  countOfUncompletedTasksField
);

//Event listeners
window.addEventListener("DOMContentLoaded", () => tasks.initializeTasks());

allTaskButton.addEventListener("click", () => tasks.getAllTasks());
completedTaskButton.addEventListener("click", () => tasks.getCompletedTasks());
uncompletedTaskButton.addEventListener("click", () =>
  tasks.getUncomletedTasks()
);

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  const validationInfo = employeeFormValidation(
    state.currentUser,
    textArea.value
  );

  if (validationInfo.isValidated) {
    tasks.addNewTask(state.currentUser, textArea.value);
    selected.classList.add("selected--valid");
    textArea.classList.add("selected--valid");
    taskErrorMessageField.innerText = "";
  } else {
    selected.classList.remove("selected--valid");
    selected.classList.add("selected--error");
    textArea.classList.remove("selected--valid");
    textArea.classList.add("selected--error");
    taskErrorMessageField.innerText = validationInfo.message;
  }
});
