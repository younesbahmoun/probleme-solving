function numberNationalitiesMarocaine() {
  let cmd = 0;
  for (let i = 0; i < personnes.length; i++) {
    if (personnes[i].nationalite.toLowerCase() === "marocaine") {
      cmd++;
    }
  }
  return cmd;
}