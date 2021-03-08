const TaskTile = (
  name,
  date,
  description,
  isComplete,
  img,
  index,
  isTaskComplete,
  removeTask
) => {
  const CheckIconButton = () => {
    const node = document.createElement("img");
    node.setAttribute("src", "images/check-mark.svg");
    node.classList.add("check_icon");
    node.classList.add(isComplete && "completed");
    node.addEventListener("click", () => isTaskComplete(index));
    return node;
  };

  const ThrashIconButton = () => {
    const node = document.createElement("img");
    node.setAttribute("src", "images/trash.svg");
    node.classList.add("trash_icon");
    node.addEventListener("click", () => removeTask(index));
    return node;
  };

  const EmployeeImage = () => {
    const node = document.createElement("img");
    node.setAttribute("src", `images/${img}`);
    node.classList.add("user_image");
    return node;
  };

  const NameField = () => {
    const node = document.createElement("h3");
    node.classList.add("task_name");
    node.innerText = name;
    return node;
  };

  const DateField = () => {
    const node = document.createElement("p");
    node.classList.add("task_date");
    node.innerText = date;
    return node;
  };

  const DescriptionField = () => {
    const node = document.createElement("p");
    node.innerText = description;
    return node;
  };

  const PersonInfoBox = () => {
    const node = document.createElement("div");
    node.classList.add("task_name_img_box");
    node.appendChild(EmployeeImage(img));
    node.appendChild(NameField(name));
    return node;
  };

  const TaskTileTop = () => {
    const node = document.createElement("div");
    node.classList.add("task_top_section");
    node.appendChild(PersonInfoBox(img, name));
    node.appendChild(DateField(date));
    node.appendChild(CheckIconButton(index, isComplete, isTaskComplete));
    return node;
  };

  const TaskTileBottom = () => {
    const node = document.createElement("div");
    node.classList.add("task_bottom_section");
    node.appendChild(DescriptionField(description));
    node.appendChild(ThrashIconButton(index, removeTask));
    return node;
  };

  const Wrapper = () => {
    const node = document.createElement("div");
    node.classList.add("task");
    node.appendChild(
      TaskTileTop(img, name, date, index, isComplete, isTaskComplete)
    );
    node.appendChild(TaskTileBottom(description, index, removeTask));
    return node;
  };

  return Wrapper();
};
