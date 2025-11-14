function nomCommenceParA() {
  for (let i = 0; i < personnes.length; i++) {
    if (personnes[i].nom.startsWith("A")) {
      console.log(personnes[i].prenom + " " + personnes[i].nom);
    }
  }
}
nomCommenceParA();