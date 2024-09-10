function createGrid (numberOfDivs) {
    const grid = document.querySelector(".grid")

    for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement("div")
        div.classList.add("grid-element")
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

createGrid(16*16)
paintGrid()