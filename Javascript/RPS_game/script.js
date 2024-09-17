// alert("HI")

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


function getHumanChoice() {
    let sign = prompt("What's your Choice?")
    return sign;
}


let humanScore;
let computerScore;

function playround(humanchoice, computerchoice) {
    console.log(computerchoice)
    console.log(humanchoice);

    if (humanchoice == "ROCK" && computerchoice == "SCISSORS") {
        console.log("You Win");
        humanScore++;
    } else if (humanchoice == "PAPER" && computerchoice == "ROCK") {
        console.log("You Win");
        humanScore++;
    } else if (humanchoice == "SCISSORS" && computerchoice == "PAPER") {
        console.log("You Win");
        humanScore++;
    } else if (humanchoice == computerScore) {
        console.log("Draw");
    } else {
        console.log("You Lose");
        
    }
    
}


playround(getHumanChoice(),getComputerChoice())