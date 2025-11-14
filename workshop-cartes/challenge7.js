function filterMaroccaine() {
  const personnesNationaliteMaroccaine = [];
  for (let i = 0; i < personnes.length; i++) {
    if (personnes[i].nationalite.toLowerCase() === "marocaine") {
      personnesNationaliteMaroccaine.push(personnes[i]);
    }
  }
  return personnesNationaliteMaroccaine;
}