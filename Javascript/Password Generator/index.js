let pass1 = document.getElementById("pas1")
let pass2 = document.getElementById("pas2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function genPass() {
    let pas = "";
    for (let i = 0; i < 15; i++) {
        let length = Math.floor(Math.random() * characters.length);
        pas += characters[length];
    }
    return pas
}

let p1v = "";
let p2v = "";

function createPass() {
    p1v = genPass()
    pass1.textContent = p1v;

    p2v = genPass()
    pass2.textContent = p2v;   
}

function copyText(par) {
    navigator.clipboard.writeText(par);
}


