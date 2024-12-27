const board = document.querySelector(".board");

let currentColor = "";
let isMouseDown = false;

//get predefined
document.querySelector(".colors").addEventListener("click", (event) => {
    if (event.target.classList.contains("color-option")) {
        currentColor = event.target.dataset.color || "white"; 
    }
});

//get custom color
document.querySelector("#customColor").addEventListener("input", (event) => {
    currentColor = event.target.value;
});

//hover effect when mouse is on a tile
board.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("tile") && !event.target.classList.contains("clicked") && !event.target.classList.contains("dragged")) {
        event.target.style.backgroundColor = "gray";
    }
})

//hover effect when mouse is leaving a tile
board.addEventListener("mouseout" ,(event) => {
    if (event.target.classList.contains("tile") && !event.target.classList.contains("clicked") && !event.target.classList.contains("dragged")) {
        event.target.style.backgroundColor = "white";
    }
})

//handle event when mouse is being clicked
board.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("tile")){
        isMouseDown = true;
        colorTile(event.target);
    }
});

//handle mouse move event while dragging)
board.addEventListener("mousemove", (event) => {
    if (isMouseDown && event.target.classList.contains("tile")) {
        colorTile(event.target);
    }
});

//handle event when is mouse is stop being clicked
board.addEventListener("mouseup", () => {
    isMouseDown = false;
});

//prevent mouse from continuing draggin when it leaves the board
board.addEventListener("mouseleave", () => {
    isMouseDown = false;
});

function colorTile(tile){
    if(tile && !tile.classList.contains("clicked") || tile.classList.contains("dragged")){
        tile.style.backgroundColor = currentColor;
        tile.classList.add("clicked");
        tile.classList.add("dragged");
    }
}

function generateTiles(size){
    board.innerHTML = "";

    const tileSize = 960 / size;

    for(let i = 0; i < size*size; i++){
        const div = document.createElement("div");
        div.setAttribute("id", `ID${i+1}`);
        div.classList.add("tile");
        div.style.width = `${tileSize}px`
        div.style.height = `${tileSize}px`
        div.style.zIndex = "1";

        div.addEventListener("mouseover", () =>{
            div.style.transform = "scale(1.2)";
            div.style.transition = "transform 0.2s";
            div.style.position = "relative";
            div.style.zIndex = "2";
        })

        div.addEventListener("mouseout", () =>{
            div.style.transform = "scale(1)";
            div.style.zIndex = "1";
        })

        div.addEventListener("click", () => {
            div.style.backgroundColor = currentColor; 
            div.classList.add("clicked");
        });

        board.appendChild(div);
    }
}

function clearBoard(){
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.style.backgroundColor = "white";
    });
}

generateTiles(16);


