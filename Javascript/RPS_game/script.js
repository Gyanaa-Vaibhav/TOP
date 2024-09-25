const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const cans = document.getElementById("computer-ans");
const ans = document.getElementById("ans");
const attempts = document.getElementById("attempts");
let humanScore;
let computerScore;
let attempt = 0;

function getComputerChoice(){
    let roll = Math.floor(Math.random() * 3);
    if (roll == 0) {
        return "ROCK"
    } else if (roll == 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

function playround(humanchoice, computerchoice) {
    console.log(computerchoice)
    console.log(humanchoice);
    attempt ++;
    attempts.textContent = `Attempts Made ${attempt}`

    cans.textContent = `Computer Chose : ${computerchoice}`;

    if (humanchoice == "ROCK" && computerchoice == "SCISSORS") {
        console.log("You Win");
        ans.textContent = "You Won Congratulations!";
        humanScore++;
    } else if (humanchoice == "PAPER" && computerchoice == "ROCK") {
        console.log("You Win");
        ans.textContent = "You Won Congratulations!";
        humanScore++;
    } else if (humanchoice == "SCISSORS" && computerchoice == "PAPER") {
        console.log("You Win");
        ans.textContent = "You Won Congratulations!";
        humanScore++;
    } else if (humanchoice === computerchoice) {
        console.log("Draw");
        ans.textContent = "Its a Draw"
    } else {
        console.log("You Lose");
        ans.textContent = "You Lose"
    }
    
}

rock.addEventListener("click", function () {
    playround("ROCK", getComputerChoice())
    
})

paper.addEventListener("click", function () {
    playround("PAPER",getComputerChoice())
})

scissor.addEventListener("click", function () {
    playround("SCISSORS",getComputerChoice())
})
