function randomCards () {
  for (let i = 0; i < personnes.length; i++) {
    const swap = personnes[i];
    const randomIndix = Math.floor(Math.random() * personnes.length);
    personnes[i] = personnes[randomIndix];
    personnes[randomIndix] = swap;
    console.log(randomIndix);
  }
  return personnes;
}