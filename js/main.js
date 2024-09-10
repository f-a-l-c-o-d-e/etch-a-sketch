function createGrid (numberOfDivsForSide=16) {
    function showGrid (numberOfDivsForSide) {
        const grid = document.querySelector(".grid")
        const numberOfDivs = numberOfDivsForSide ** 2
        for (let i = 0; i < numberOfDivs; i++) {
            const div = document.createElement("div")
            div.classList.add("grid-element")
            div.style.padding = `${(640-(2*numberOfDivsForSide))/(2*numberOfDivsForSide)}px`
            grid.appendChild(div)
        }
    }
    
    function paintGrid () {
        const gridElements = document.querySelectorAll(".grid-element")
    
        gridElements.forEach((div) => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "red"
                setTimeout(() => {
                    div.style.backgroundColor = "white"
                }, 500)
            })
        })
    }
    
    showGrid(numberOfDivsForSide)
    paintGrid()
}

function changeGrid () {
    const input = prompt("Insert the number of squares per side (max 100):")
    if (input > 100 || Number(input) === NaN || input === "") {
        changeGrid()
    } else {
        const grid = document.querySelector(".grid")
        const gridElements = document.querySelectorAll(".grid-element")
        gridElements.forEach(div => {
            grid.removeChild(div)
        })
        createGrid(Number(input))
    }
}

const button = document.querySelector(".gridButton")




createGrid(16)

button.addEventListener("click", () => changeGrid())