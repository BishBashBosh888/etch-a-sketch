const board = document.querySelector(".board");

board.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("tile")) {
        event.target.style.backgroundColor = "gray";
    }
})

board.addEventListener("mouseout" ,(event) => {
    if (event.target.classList.contains("tile")) {
        event.target.style.backgroundColor = "white";
    }
})

function generateTiles(size){
    board.innerHTML = "";

    const tileSize = 960 / size;

    for(let i = 0; i < size*size; i++){
        const div = document.createElement("div");
        div.setAttribute("id", `ID${i+1}`);
        div.classList.add("tile");
        div.style.width = `${tileSize}px`
        div.style.height = `${tileSize}px`

        div.addEventListener("mouseover", () =>{
            div.style.backGround = "gray";
        })

        div.addEventListener("mouseout", () =>{
            div.style.backGround = "white";
        })

        board.appendChild(div);
    }
}

generateTiles(16);


