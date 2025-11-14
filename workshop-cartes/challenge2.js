function showUniqueNationalities(nameNationalite) {
  for (let i = 0; i < personnes.length; i++) {
    if (
      personnes[i].nationalite.toLowerCase() === nameNationalite.toLowerCase()
    ) {
      console.log(personnes[i]);
    }
  }
}