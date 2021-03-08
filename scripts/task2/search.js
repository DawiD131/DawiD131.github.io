const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box");
const textarea = document.querySelector("textarea");

const state = {
  currentUser: null,
};

data.forEach((employee) => {
  optionsContainer.appendChild(
    Option(
      employee.name,
      employee.lastName,
      employee.photo,
      employee._id,
      state.currentUser ? state.currentUser.id : null
    )
  );
});

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.classList.remove("hidden");
  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
    textarea.classList.add("hidden");
  } else {
    textarea.classList.remove("hidden");
    searchBox.classList.add("hidden");
  }
});

optionsList.forEach((o) => {
  o.addEventListener("click", (e) => {
    state.currentUser = data.filter(
      (item) => e.currentTarget.id == item._id
    )[0];
    textarea.classList.remove("hidden");
    searchBox.classList.add("hidden");
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    optionsList.forEach((item) => item.classList.remove("option--selected"));
    e.currentTarget.classList.add("option--selected");
  });
});

searchBox.addEventListener("keyup", function (e) {
  filterList(e.target.value);
});

const filterList = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach((option) => {
    let label = option.firstElementChild.nextElementSibling.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "flex";
    } else {
      option.style.display = "none";
    }
  });
};
