const container = document.querySelector("#container");
for(let i = 0; i < 16; i++){
    const content = document.createElement("div");
    container.appendChild(content);
    for(let j =0; j < 16; j++){
        const row = document.createElement("div");
        row.classList.add("row");
        content.appendChild(row);       
    }
}
const rows = document.querySelectorAll(".row");
rows.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.add("hovered");
    })
});