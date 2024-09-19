const container = document.querySelector("#container");
function createGrid(dims){
    for(let i = 0; i < dims; i++){
        const content = document.createElement("div");
        content.classList.add("column");
        container.appendChild(content);
        for(let j =0; j < dims; j++){
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
}
createGrid(16);


const button = document.querySelector("button");
button.addEventListener("click", () => {
    let str = prompt("Enter a number between 1 and 100");
    if(str > 100){
        str = 100;
    }
    else if(str < 1){
        str = 1;
    }
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(str);
});