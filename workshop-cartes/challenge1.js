function showAllNames(name) {
  for (let i = 0; i < personnes.length; i++) {
    if (personnes[i].nom.toLowerCase() === name.toLowerCase()) {
      console.log(personnes[i]);
    }
  }
}
showAllNames("saRA");