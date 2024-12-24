const board = document.querySelector(".board");

for(let i = 0; i < 16*16; i++){
    const div = document.createElement("div");
    board.appendChild(div);
    div.textContent = i+1;
    div.setAttribute("id", `ID${i+1}`);
    div.classList.add("tile");
    
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "gray";
    })

    div.addEventListener("mouseout" ,() => {
        div.style.backgroundColor = "white";
    })
}


