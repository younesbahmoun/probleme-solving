function createChampTeper () {
    const divParent = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("id", "name-taper");
    const btn = document.createElement("button");
    btn.setAttribute("id", "name-submit");
    const txtBtn = document.createTextNode("submit name");
    btn.appendChild(txtBtn);
    divParent.appendChild(input);
    divParent.appendChild(btn);
    document.body.appendChild(divParent);
}
// function 
function chagneFullNamePerson () {
    createChampTeper();
    document.getElementById("name-submit").addEventListener("click", () => {
        const valueNameTaper = document.getElementById("name-taper").value;
        
    });
}