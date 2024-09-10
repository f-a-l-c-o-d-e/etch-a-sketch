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
        
        function randomColor() {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)

            return `rgb(${r},${g},${b})`
        }

        gridElements.forEach((div) => {
            let opacity = 0
            let color = randomColor()
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = color
                div.style.opacity = `${opacity}`
                if (opacity <= 1) {
                    opacity += 0.1
                }
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
        const button = document.querySelector(".gridButton")
        button.textContent = `Click me to change the dimension of the grid (actual: ${input}x${input})`
    }
}


createGrid(16)

const button = document.querySelector(".gridButton")
button.addEventListener("click", () => changeGrid())