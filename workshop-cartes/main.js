// A = 65   <>   Z = 90   ||   a = 97  <>  z = 122
console.log('az' > 'asa'); // true
console.log('a'.charCodeAt(0)); // 122

document.getElementById("trie").addEventListener("click", () => {
    const parent = document.getElementById("parent");
    const swap = parent.children[1].textContent;
    parent.children[1].textContent = parent.children[2].textContent;
    parent.children[2].textContent = swap;
    // parent.children[1].textContent = `<p id="ana">33</p>`;

});


const parent = document.getElementById("cards-container");
for (let i = 0; i < parent.childElementCount; i++) {
    console.log(parent.children[i].children[0].children[0].textContent);
}