const main = document.getElementById("container");
const block = document.querySelectorAll("ide")
const btn16 = document.getElementById("btn-16")
const btn32 = document.getElementById("btn-32")
const btn64 = document.getElementById("btn-64")
let grid = 0;
let clas;

btn16.addEventListener("click", function () {
    grid = (16 * 16);
    clas = "div-16"
    console.log(grid);
    createGrid();
    btn32.setAttribute("disabled", true)
    btn16.setAttribute("disabled",true)
    btn64.setAttribute("disabled",true)
})

btn32.addEventListener("click", function () {
    grid = (32 * 32);
    clas = "div-32"
    console.log(grid);
    createGrid();
    btn32.setAttribute("disabled", true)
    btn16.setAttribute("disabled",true)
    btn64.setAttribute("disabled",true)
})

btn64.addEventListener("click", function () {
    grid = (64 * 64);
    clas = "div-64"
    console.log(grid);
    createGrid();
    btn32.setAttribute("disabled", true)
    btn16.setAttribute("disabled",true)
    btn64.setAttribute("disabled",true)
})



function createGrid() {

    for (let index = 0; index < grid; index++) {
        const divs = document.createElement("div")
        divs.classList.add(`column`)
        divs.classList.add(clas)
        main.appendChild(divs)
    }

    const box = document.querySelectorAll(".column")

    box.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "white"
            setTimeout(function () {
                div.style.backgroundColor = ""
            }, 1000)
        })
    })
}

