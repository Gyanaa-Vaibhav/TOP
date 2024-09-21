let myLeads = []
const input = document.querySelector(".input-btn")
const save = document.querySelector(".save-btn")
const clear = document.querySelector(".clear-btn")
const output = document.querySelector(".output-bx")

if (localStorage.getItem("myLeads")) {
    myLeads = JSON.parse(localStorage.getItem("myLeads"))
    renderLeads();
}

save.addEventListener("click", function () {
    myLeads.push(input.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    input.value = ""
    renderLeads()
})

function renderLeads() {
    let ans = "";
    for (let index = 0; index < myLeads.length; index++) {
        ans += `<li>${myLeads[index]}</li>`
    }
    output.innerHTML = ans
}

clear.addEventListener("click", function () {
    myLeads = []
    renderLeads();
    localStorage.clear()
})