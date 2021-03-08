class Facts {
  constructor(...params) {
    [
      this.baseURL,
      this.rootElement,
      this.currentIdField,
      this.currentDateField,
      this.currentDescriptionField,
      this.currentFactIcon,
      this.appWrapper,
      this.fullInfo,
    ] = params;
    this.data = [];
  }

  getCatsFacts = (count) => {
    const amountOfFacts = count === 1 ? "" : count;
    fetch(
      `${this.baseURL}/facts/random?animal_type=cat&amount=${amountOfFacts}`
    )
      .then((response) => response.json())
      .then((facts) => {
        facts.forEach((fact) => {
          this.setRandomIconToFact(fact);
        });
        this.data = facts;
        this.drawCatsTiles(facts);
      });
  };

  getCatFactById = (id) => {
    this.drawCurrentCatTile(this.data.filter((fact) => fact._id === id)[0]);
  };

  setRandomIconToFact = (fact) => {
    const icon = Math.floor(Math.random() * 2) ? "cat1.svg" : "cat2.svg";
    fact["icon"] = icon;
  };

  sortByDateAsc = () =>
    this.drawCatsTiles(
      this.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    );

  sortByDateDesc = () =>
    this.drawCatsTiles(
      this.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );

  sortByIdAsc = () =>
    this.drawCatsTiles(
      this.data.sort(
        (a, b) =>
          parseInt(a._id.replace(/\D/g, "")) -
          parseInt(b._id.replace(/\D/g, ""))
      )
    );

  sortByIdDesc = () =>
    this.drawCatsTiles(
      this.data.sort(
        (a, b) =>
          parseInt(b._id.replace(/\D/g, "")) -
          parseInt(a._id.replace(/\D/g, ""))
      )
    );

  disabledFullInfo(el) {
    if (el.target.tagName === "BODY") {
      this.appWrapper.classList.remove("wrapper--blured");
      this.fullInfo.classList.add("full-fact--disabled");
    } else return;
  }

  drawCatsTiles = (facts) => {
    const fragment = document.createDocumentFragment();
    if (this.rootElement.childElementCount > 0) {
      this.rootElement.textContent = "";
    }
    facts.forEach((fact) => {
      fragment.appendChild(
        this.makeFactTile(fact.text, fact.createdAt, fact.icon, fact._id)
      );
    });
    this.rootElement.appendChild(fragment);
  };

  drawCurrentCatTile = (fact) => {
    this.currentIdField.innerText = `ID: ${fact._id}`;
    this.currentDateField.innerText = formatDate(fact.createdAt);
    this.currentDescriptionField.innerText = fact.text;
    this.currentFactIcon.setAttribute("src", `images/${fact.icon}`);
  };

  makeFactTile = (description, date, icon, id) => {
    const factTile = FactTile(id, date, description, icon);
    factTile.addEventListener("click", () => {
      this.getCatFactById(id);
      this.appWrapper.classList.add("wrapper--blured");
      fullInfo.classList.remove("full-fact--disabled");
      window.addEventListener("mousedown", (e) => {
        this.disabledFullInfo(e);
      });
    });

    return factTile;
  };
}
