function supprimerCardTunisiennes() {
  const btn = document.createElement("button");
  const txtBtn = document.createTextNode("remove tunisiennes");
  btn.appendChild(txtBtn);
  document.body.appendChild(btn);
  btn.addEventListener("click", () => {
    const cardsContainer = document.getElementById("cards-container");
    let cmd = 0;
    for (let i = 0; i < personnes.length; i++) {
    // Best Solution (let i = personnes.length - 1; i >= 0 ; i--)
      if (personnes[i].nationalite.toLowerCase() === "tunisienne") {
        cardsContainer.children[i - cmd].remove();
        cmd++;
      }
    }
  });
}
supprimerCardTunisiennes();