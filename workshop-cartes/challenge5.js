function changeColorMarocaineCards() {
  const btn = document.createElement("button");
  const txtBtn = document.createTextNode("chenge color carocaine cards");
  btn.appendChild(txtBtn);
  document.body.appendChild(btn);
  const cardsContainer = document.getElementById("cards-container");
  btn.addEventListener("click", () => {
    for (let i = 0; i < personnes.length; i++) {
      if (personnes[i].nationalite.toLowerCase() === "marocaine") {
        cardsContainer.children[i].children[0].children[0].style.color = "red";
      }
    }
  });
}
changeColorMarocaineCards();