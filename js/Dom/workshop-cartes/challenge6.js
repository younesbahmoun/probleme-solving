function trieParNom() {
  const btn = document.createElement("button");
  const txtBtn = document.createTextNode("trie par nom");
  btn.appendChild(txtBtn);
  document.body.appendChild(btn);
  const cardsContainere = document.getElementById("cards-container");
  btn.addEventListener("click", () => {
    let min;
    let indexMin;
    let swap;
    for (let i = 0; i < personnes.length - 1; i++) {
      min = personnes[i].nom;
      indexMin = i;
      for (let j = i + 1; j < personnes.length; j++) {
        if (min.toLowerCase() > personnes[j].nom.toLowerCase()) {
          min = personnes[j].nom;
          indexMin = j;
        }
      }
      // Wrong trier in object or body 
      // swap = cardsContainere.children[i].children[0].children[0].textContent;
      // cardsContainere.children[i].children[0].children[0].textContent = `${personnes[indexMin].prenom} ${personnes[indexMin].nom}`;
      // cardsContainere.children[indexMin].children[0].children[0].textContent = `${swap}`;
      swap = personnes[i];
      personnes[i] = personnes[indexMin];
      personnes[indexMin] = swap;
    }
    return personnes;
  });
}
console.log(trieParNom());