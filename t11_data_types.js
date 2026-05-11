/****************************
t11_data_types.js
****************************/
console.log("Running t11_data_types.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {

  const Name_Field = document.getElementById("nameField");
  let username = Name_Field.value;

  const Ages_Field = document.getElementById("AgesField");
  let userAges = Number(Ages_Field.value);

  const Money_Field = document.getElementById("moneyField");
  let usermoney = Number(Money_Field.value);


  showOutput(username, userAges, usermoney);
}

/****************************
Dino World header
****************************/

function showOutput(username, userAges, usermoney) {

  let Year = 2026;


  function Welcome() {
    OUTPUT.innerHTML += "<p> Welcome to the shop </p>";
  }

  function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>" + _name + _price + "</p>";
  }

  OUTPUT.innerHTML = "<p> My name is " + username + "</p>";

  OUTPUT.innerHTML += "<p>As of " + Year + " you are " + userAges + " Years old</p>";

  let born = Year - userAges;
  OUTPUT.innerHTML += "<p> You were born in " + born + "</p>";

  let Years = userAges + 10;
  OUTPUT.innerHTML += "<p>In 10 years you will be " + Years + " years old </p>";

  OUTPUT.innerHTML += "<p> You have " + usermoney + " dollars</p>";

  Welcome();

  displayProduct("Waters bottles: ", "$1.50");
  displayProduct("nokia 3310: ", "$65");
  displayProduct("65-inch 4K TVs: ", "$1050");
  displayProduct("Laptop: ", "$2000");
  displayProduct("Dune 85' Benetti 1974: ", "$500,000");
  displayProduct("lamborghini aventador: ", "$1,000,000");
  displayProduct("Lands: ", "$3,000,000");


  usermoney = usermoney / 2;
  OUTPUT.innerHTML += "<p> You spend half of your money on the Shop, now you have " + usermoney + "</p>";

  usermoney = usermoney + 3;
  OUTPUT.innerHTML += "<p> Then you get $3, now you have " + usermoney + "</p>";

}

/****************************
Footer
****************************/