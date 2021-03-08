const Option = (name, lastName, photo, id) => {
  const OptionInput = () => {
    const node = document.createElement("input");
    node.classList.add("radio");
    node.setAttribute("type", "radio");
    node.setAttribute("id", `employee${id}`);
    node.setAttribute("name", "employee");
    return node;
  };

  const OptionImg = () => {
    const node = document.createElement("img");
    node.classList.add("user_image");
    node.setAttribute("src", `images/${photo}`);
    return node;
  };

  const OptionLabel = () => {
    const node = document.createElement("label");
    node.setAttribute("for", `emoloyee${id}`);
    node.innerText = `${name} ${lastName}`;
    return node;
  };

  const Wrapper = () => {
    const node = document.createElement("div");
    node.setAttribute("id", id);
    node.classList.add("option");
    node.appendChild(OptionInput(id));
    node.appendChild(OptionImg(photo));
    node.appendChild(OptionLabel(name, lastName, id));
    return node;
  };

  return Wrapper();
};
