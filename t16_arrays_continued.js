/****************************
t16_arrys_continued.js
****************************/
console.log("Running t16_arrys_continued.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let output = document.getElementById("shoppingListOutput");
let list = []; //array//

function addShoppingItem() {
    let input = document.getElementById("shoppingItemField");
    let item = input.value;

    if (item < "-1") { //if item is lesser than -1//
        output.innerHTML = "Please type an item first!";
    } else {
        list.push(item); //add the item to the array I think//
        output.innerHTML = item + " was added to the shopping list!";
        input.value = ""; ////
    }
}

function showShoppingList() {

    if (list.length == 0) {
        output.innerHTML = "Your shopping list is empty!";
    } else {
        let text = "Shopping List:<br>";

        for (let i = 0; i < list.length; i++) {
            text = text + list[i] + "<br>";
        }

        output.innerHTML = text;
    }
}

function getFormInput() {

  const Name_Field = document.getElementById("nameField");
  let username = Name_Field.value;

  const Ages_Field = document.getElementById("AgesField");
  let userAges = Number(Ages_Field.value);

  const Money_Field = document.getElementById("moneyField");
  let usermoney = Number(Money_Field.value);

  const Waters_Field = document.getElementById("WatersField");
  let WatersRating = Number(Waters_Field.value);


  showOutput(username, userAges, usermoney,WatersRating);
}

/****************************
Dino World header
****************************/

function showOutput(username, userAges, usermoney,WatersRating) {

let  Waters_bottles_rating = ["You loath Waters bottles", " Waters bottles is meh", " Waters bottles is pretty good" , " Waters bottles is the best thing EVER!!!!"];
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

    function calculateChange(usermoney, price) {
    return usermoney - price ;
  }

  displayProduct("Waters bottles: ", "$1.50");

  if ( usermoney >= 1.50) {
    OUTPUT.innerHTML += "<p> A Waters bottles costs $1.50, You CAN afford a Waters bottles </p>";

    const change = calculateChange( usermoney, 1.50 );
    OUTPUT.innerHTML += "<p> Your change is " + change  + "</p>";
    usermoney = usermoney - 1.50

  } else if ( usermoney <= 1.50 ) {
     OUTPUT.innerHTML += "<p> A Waters bottles costs $1.50, Sorry you CAN'T afford a Waters bottles </p>";
  }

  OUTPUT.innerHTML += " " + Waters_bottles_rating[WatersRating] + "<br>";

  displayProduct("nokia 3310: ", "$65.5");

    if ( usermoney >= 65.5) {
    OUTPUT.innerHTML += "<p> A nokia 3310 costs $65.5, You CAN afford a nokia 3310 </p>";

    const change = calculateChange( usermoney, 65.5 );
    OUTPUT.innerHTML += "<p> Your change is " + change  + "</p>";
    usermoney = usermoney - 65.5

  } else if ( usermoney <= 65.5 ) {
     OUTPUT.innerHTML += "<p> A nokia 3310 costs $65.5, Sorry you CAN'T afford a nokia 3310 </p>";
  }

  displayProduct("65-inch 4K TVs: ", "$1050");

    if ( usermoney >= 1050) {
    OUTPUT.innerHTML += "<p> A 65-inch 4K TVs costs $1050, You CAN afford a 65-inch 4K TVs </p>";

    const change = calculateChange( usermoney, 1050 );
    OUTPUT.innerHTML += "<p> Your change is " + change  + "</p>";
    usermoney = usermoney - 1050
  } else if ( usermoney <= 1050 ) {

     OUTPUT.innerHTML += "<p> A 65-inch 4K TVs costs $1050, Sorry you CAN'T afford a 65-inch 4K TVs </p>";
  }
  
  displayProduct("Laptop: ", "$2000");

    if ( usermoney >= 2000) {
    OUTPUT.innerHTML += "<p> A Laptop costs $2000, You CAN afford a Laptop </p>";

    const change = calculateChange( usermoney, 2000 );
    OUTPUT.innerHTML += "<p> Your change is " + change  + "</p>";
    usermoney = usermoney - 2000

  } else if ( usermoney <= 2000 ) {
     OUTPUT.innerHTML += "<p> A Laptop costs $2000, Sorry you CAN'T afford a Laptop </p>";
  }

  displayProduct("Dune 85' Benetti 1974: ", "$500,000");

    if ( usermoney >= 500000) {
    OUTPUT.innerHTML += "<p> A Dune 85' Benetti 1974 costs $500000, You CAN afford a Dune 85' Benetti 1974 </p>";

        const change = calculateChange( usermoney, 500000 );
    OUTPUT.innerHTML += "<p> Your change is " + change  + "</p>";
    usermoney = usermoney - 500000

  } else if ( usermoney <= 500000 ) {
     OUTPUT.innerHTML += "<p> A Dune 85' Benetti 1974 costs $500000, Sorry you CAN'T afford a Dune 85' Benetti 1974 </p>";
  }

  displayProduct("Lamborghini Aventador: ", "$1,000,000");

  if ( usermoney >= 1000000) {
    OUTPUT.innerHTML += "<p> A Lamborghini Aventador costs $1,000,000, You CAN afford a Lamborghini Aventador </p>";

    const change = calculateChange( usermoney, 1000000 );
    OUTPUT.innerHTML += "<p> Your change is " + change  + "</p>";
    usermoney = usermoney - 1000000
    
  } else if ( usermoney <= 1000000 ) {
     OUTPUT.innerHTML += "<p> A Lamborghini Aventador costs $1,000,000, Sorry you CAN'T afford a Lamborghini Aventador </p>";
  }

  displayProduct("Lands: ", "$3,000,000");

  if ( usermoney >= 3000000) {
    OUTPUT.innerHTML += "<p> A Lands costs $3,000,000, You CAN afford a Lands </p>";

    const change = calculateChange( usermoney, 3000000 );
    OUTPUT.innerHTML += "<p> Your change is " + change  + "</p>";
    usermoney = usermoney - 3000000

  } else if ( usermoney <= 3000000 ) {
     OUTPUT.innerHTML += "<p> A Lands costs $3,000,000, Sorry you CAN'T afford a Lands </p>";
  }

  usermoney = usermoney / 2;
  OUTPUT.innerHTML += "<p> You spend half of your money on the Shop, now you have " + usermoney + "</p>";

  usermoney = usermoney + 3;
  OUTPUT.innerHTML += "<p> Then you get $3, now you have " + usermoney + "</p>";

}

/****************************
Footer
****************************/