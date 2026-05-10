/****************************
t11_data_types.js
****************************/
console.log("Running t11_data_types.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


/****************************
Dino World header
****************************/


function showOutput(username, userAges, usermoney) {

let Year = 2026;
let money = 10;
let Yearold = 16;
// Variable


function Welcome(){
  OUTPUT.innerHTML += "<p> Welcome to the shop </p>";
}

function displayProduct(_name, _price){

OUTPUT.innerHTML += "<p>"+ _name  + _price + "</p>";
}

OUTPUT.innerHTML = "<p> Hi " + username + "</p>";

OUTPUT.innerHTML += "<p>As of " + Year + " you are " + userAges + " Years old</p>";
born = Year - userAges;
OUTPUT.innerHTML += "<p> You were born in " + born + "</p>";
Years = userAges + 10;
OUTPUT.innerHTML += "<p>In 10 years you will be " + Years+ " years old </p>";

OUTPUT.innerHTML += "<p> You have " + usermoney + " dollars</p>";
money = money / 2;
OUTPUT.innerHTML += "<p> You spend half of your money, now you have " + money + "</p>";
money = money + 3;
OUTPUT.innerHTML += "<p> Then you get $3, now you have " + money + "</p>";

Welcome()

displayProduct("Chocolate bar: ", "$4")
displayProduct("Chips: ", "$3")
displayProduct("Drink: ", "$2.50")

}

/****************************
Footer
****************************/