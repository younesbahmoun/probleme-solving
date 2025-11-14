function showVisibleCardsInPage() {
  const cards = document.getElementById("cards-container");
  for (let i = 0; i < cards.childElementCount; i++) {
    for (let j = 0; j < personnes.length; j++) {
      if (cards.children[i].children[0].children[0].textContent.startsWith(`${personnes[j].nom} ${personnes[j].prenom}`)) {
        console.log(`${personnes[j].prenom} ${personnes[j].nom}`);
        break;
      }
    }
  }
}
showVisibleCardsInPage();