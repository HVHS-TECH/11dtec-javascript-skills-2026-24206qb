/****************************
t10_input_from_HTML.js
****************************/
console.log("Running t10_input_from_HTML.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {
  const Name_Field = document.getElementById('nameField');
  let username = Name_Field.value; 
  OUTPUT.innerHTML += "<p>Your name is " + username + "</p>";
}

let name = " QuocBao"
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

/****************************
Dino World header
****************************/


OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>"

OUTPUT.innerHTML += "<p> Hi " + name + "</p>";

OUTPUT.innerHTML += "<p>As of " + Year + " you are " + Yearold + " Years old</p>";
born = Year - Yearold;
OUTPUT.innerHTML += "<p> You were born in " + born + "</p>";
Years = Yearold + 10;
OUTPUT.innerHTML += "<p>In 10 years you will be " + Years+ " years old </p>";

OUTPUT.innerHTML += "<p> You have " + money + " dollars</p>";
money = money / 2;
OUTPUT.innerHTML += "<p> You spend half of your money, now you have " + money + "</p>";
money = money + 3;
OUTPUT.innerHTML += "<p> Then you get $3, now you have " + money + "</p>";

Welcome()

displayProduct("Chocolate bar: ", "$4")
displayProduct("Chips: ", "$3")
displayProduct("Drink: ", "$2.50")



/****************************
Footer
****************************/