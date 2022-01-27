const ul = document.createElement("ul");
const nombresConA = [
    "Ana",
    "Anahi",
    "Andrea",
    "Ariana",
    "Analia",
    "Alanis"
];

for(let i = 0; i < nombresConA.length; i++){
    let li = document.createElement("li")
    li.innerHTML = nombresConA[i]
    ul.appendChild(li);
}

document.body.appendChild(ul)