const FactTile = (id, date, description, iconSrc) => {
  const Icon = () => {
    const node = document.createElement("img");
    node.src = `images/${iconSrc}`;
    node.classList.add("fact-tile__icon");
    return node;
  };

  const IconBox = () => {
    const node = document.createElement("div");
    node.classList.add("fact-tile__icon-box");
    node.appendChild(Icon(iconSrc));
    return node;
  };

  const FactSection = () => {
    const node = document.createElement("div");
    node.classList.add("fact-tile__fact-section");
    node.appendChild(FactId(id));
    node.appendChild(FactDate(date));
    node.appendChild(FactDescription(description));
    return node;
  };

  const FactId = () => {
    const node = document.createElement("p");
    node.classList.add("fact-tile__id");
    node.appendChild(
      document.createTextNode(`id: ${id.toString().slice(0, 12)}...`)
    );
    return node;
  };

  const FactDate = () => {
    const node = document.createElement("p");
    node.classList.add("fact-tile__date");
    node.appendChild(document.createTextNode(formatDate(date)));
    return node;
  };

  const FactDescription = () => {
    const node = document.createElement("p");
    node.classList.add("fact-tile__description");
    node.appendChild(document.createTextNode(`${description.slice(0, 45)}...`));
    return node;
  };

  const Wrapper = () => {
    const node = document.createElement("div");
    node.classList.add("fact-tile");
    node.appendChild(IconBox(iconSrc));
    node.appendChild(FactSection(id, date, description));
    node.setAttribute("data-id", id);
    return node;
  };
  return Wrapper();
};
