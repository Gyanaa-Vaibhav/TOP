import menuItems from "./data.js"

const menu = document.getElementById("main")
const checkoutItems = document.getElementById("checkoutItems");
const checkoutSection = document.querySelector(".checkoutSection");
const totalPrice = document.getElementById("totalPrice");
const form = document.getElementById("form")
const payonFrom = document.getElementById("formPay");
const orderComplete = document.getElementById("orderComplete");
const cancelbtn = document.getElementById("cancel");
const userName = document.getElementById("name");
const afterPayment = document.getElementById("afterPayment");
const formPay = document.getElementById("formPay");

let name = ''
let itemsBought = []
let pizza = 0
let burger = 0
let fries = 0
let total = 0

menuItems.forEach(function (x) {
    
        menu.innerHTML += `
            <div class="items">
                <img src="${x.image}" alt="">
                <div class="info">
                    <h2>${x.name}</h2>
                    <p>${x.description}</p>
                    <p>$${x.price}</p>
                </div>
                <button id="${x.name}">+</button>
            </div>
            <hr>
    `
    }
);

menu.addEventListener("click", function (e) {
    const a = e.target.id
    menuItems.forEach(x => {
        if (x.name == a) {

            if (a === "Pizza") {
                pizza++;  
                if (!itemsBought.includes(x)) {
                    itemsBought.push(x);
                    console.log("Yes")
                }
            }

            if (a === "Hamburger") {
              burger++;
              if (!itemsBought.includes(x)) {
                itemsBought.push(x);
                console.log("Yes");
              }
            }
            
            if (a === "Fries") {
              fries++;
              if (!itemsBought.includes(x)) {
                itemsBought.push(x);
                console.log("Yes");
              }
            }

            console.log(x.name)
            console.log(itemsBought);
        }
    })

    if (itemsBought.length > 0) {
        checkoutSection.style.display = "flex";
        render()
    }
})


function render() {
    checkoutItems.innerHTML = ''
    itemsBought.forEach((x) => {
        if (x.name == "Pizza") {
            checkoutItems.innerHTML += `
                <div class="itemName">
                    <p>${x.name} X ${pizza}</p>
                    <p id="remove">Remove</p>
                    <p id="price">$${x.price*pizza}</p>
                </div>    
                `;
        }

        if (x.name == "Hamburger") {
            checkoutItems.innerHTML += `
                <div class="itemName">
                    <p>${x.name} X ${burger}</p>
                    <p id="remove">Remove</p>
                    <p id="price">$${x.price*burger}</p>
                </div>    
                `;
        }

        if (x.name == "Fries") {
            checkoutItems.innerHTML += `
                <div class="itemName">
                    <p>${x.name} X ${fries}</p>
                    <p id="remove">Remove</p>
                    <p id="price">$${x.price*fries}</p>
                </div>    
                `;
        }
        total = pizza * 14 + burger * 12 + fries * 8;
        
    })
    // console.log(itemsBought)
    const a = itemsBought.reduce((total, current) => total + current.price, 0,)
    // console.log(a);

    totalPrice.innerHTML = `Total Price :<span>$${total}</span>`;  
    payonFrom.innerHTML = `Pay $${total}`
}

form.addEventListener("click", (x) => x.preventDefault())

orderComplete.addEventListener("click", () => form.style.display = 'flex')
cancelbtn.addEventListener("click", () => form.style.display = 'none')

formPay.addEventListener("click", () => {
    afterPayment.style.display = "flex"
    afterPayment.innerHTML = `<p>Thanks, ${userName.value}! Your order is on its way!</p>`;
    checkoutSection.style.display = "none"
    form.style.display = "none"
    itemsBought = []
})