//Base api url
const baseURL = "https://cat-fact.herokuapp.com";

// Selectors
const factsWrapper = document.querySelector(".facts-container");
const currentFactIdField = document.querySelector(".current_fact_id");
const currentFactDateField = document.querySelector(".current_fact_date");
const currentFactDescriptionField = document.querySelector(
  ".current_fact_description"
);
const currentFactIcon = document.querySelector(".cat_icon_current");
const wrapper = document.querySelector(".wrapper");
const fullInfo = document.querySelector(".full-fact");
const refresh = document.querySelector(".refresh_icon");
const input = document.querySelector("input");
const button = document.querySelector(".top-panel__button");
const sortByDateAscArrow = document.querySelector(".arrow_date_up");
const sortByDateDescArrow = document.querySelector(".arrow_date_down");
const sortByIdAscArrow = document.querySelector(".arrow_id_up");
const sortByIdDescArrow = document.querySelector(".arrow_id_down");
const closeBtn = document.querySelector(".close_icon");
const errorMessageField = document.querySelector(".error-message");

// set current link style
const link = document.querySelector(".navbar__first-link");
link.classList.add("current-page");

//Create new instance of facts
const facts = new Facts(
  baseURL,
  factsWrapper,
  currentFactIdField,
  currentFactDateField,
  currentFactDescriptionField,
  currentFactIcon,
  wrapper,
  fullInfo
);

//Event listeners

window.addEventListener("DOMContentLoaded", () => {
  facts.getCatsFacts(30);
});

refresh.addEventListener("click", () => facts.getCatsFacts(30));

button.addEventListener("click", () => {
  const validationInfo = factsFormValidation(parseInt(input.value));
  if (validationInfo.isValidated) {
    facts.getCatsFacts(parseInt(input.value));
    input.classList.add("input--error");
    errorMessageField.innerText = validationInfo.message;
    input.classList.add("input--valid");
  } else {
    input.classList.add("input--error");
    errorMessageField.innerText = validationInfo.message;
    input.classList.remove("input--valid");
  }
});

sortByDateAscArrow.addEventListener("click", () => facts.sortByDateAsc());

sortByDateDescArrow.addEventListener("click", () => facts.sortByDateDesc());

sortByIdAscArrow.addEventListener("click", () => facts.sortByIdAsc());

sortByIdDescArrow.addEventListener("click", () => facts.sortByIdDesc());

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("wrapper--blured");
  fullInfo.classList.add("full-fact--disabled");
});
