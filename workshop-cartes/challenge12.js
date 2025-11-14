function originCardInData() {
  const btn = document.createElement("button");
  const txtBtn = document.createTextNode("initialise data");
  btn.appendChild(txtBtn);
  document.body.appendChild(btn);
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";
  btn.addEventListener("click", () => {
    for (let i = 0; i < personnes.length; i++) {
      cardsContainer.appendChild(createCardPerson(personnes[i]));
    }
  });
}
function createCardPerson(dataPerson) {
  const div = document.createElement("div");
  div.setAttribute("class", "card");

  const divChild = document.createElement("div");
  divChild.setAttribute("class", "card-info");

  const h3 = document.createElement("h3");
  const txtH3 = document.createTextNode(
    `${dataPerson.prenom} ${dataPerson.nom}`
  );
  h3.appendChild(txtH3);

  divChild.appendChild(h3);

  div.appendChild(divChild);
  return div;
}
originCardInData();