const roundCount = document.getElementById("roundcount")
const home = document.getElementById("hscore")
const guest = document.getElementById("gscore")


let round = 0;
let homeScore = 0;
let guestScore = 0;

function addround() {
    round++;
    roundCount.innerHTML = round;
}

function addHomeScore(team, points) {
    if (team == home) {
        homeScore += points;
        team.innerHTML = homeScore;
        console.log(points);
    } else if (team == guest) {
        guestScore += points;
        team.innerHTML = guestScore;
        console.log(points);
    }
}

function reset() {
    console.log("inside");
    homeScore = 0;
    home.innerHTML = 0;
    guestScore = 0;
    guest.innerHTML = 0;
}

function resetAll() {
    roundCount.innerHTML = 0;
    home.innerHTML = 0;
    guest.innerHTML = 0;
    
    guestScore = 0;
    homeScore = 0;
    round = 0;
}