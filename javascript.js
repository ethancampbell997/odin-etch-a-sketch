const container = document.querySelector("#container");
for(let i = 0; i < 16; i++){
    const content = document.createElement("div");
    //content.classList.add("row");
    //container.appendChild(content);
    //for(let j =0; j < 16; j++){
    //    const subcontent = document.createElement("div");
    //    content.appendChild(subcontent);
    //}
    container.appendChild(content);
    for(let j =0; j < 16; j++){
        const row = document.createElement("div");
        row.classList.add("row");
        content.appendChild(row);
    }
}
//const something = document.createElement("div");
//something.textContent = "hi";
//container.appendChild(something);