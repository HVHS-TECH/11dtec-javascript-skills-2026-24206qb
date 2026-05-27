/****************************
T15-for loop
****************************/

console.log("Running t15-for loop.js");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {
    const Song_Field = document.getElementById("SongField");
    var count = Number(Song_Field.value);

    showOutput(count);
}

function showOutput(num) {
    var text = "";

    for (var i = num; i > 0; i--) {

        if (i > 1) {
            text += `${i} bottles of age-appropriate beverage on the wall, ${i} bottles of age-appropriate beverage. Take one down, pass it around, ${i - 1} bottles of age-appropriate beverage on the wall.`;

        } else {
            text += `${i} bottle of age-appropriate beverage on the wall, ${i} bottle of age-appropriate beverage. Take one down, pass it around, no more bottles of age-appropriate beverage on the wall.`;

            text += `No more bottles of age-appropriate beverage on the wall, no more bottles of age-appropriate beverage. Go to the store and buy some more, 99 bottles of age-appropriate beverage on the wall.`;
        }
    }

    OUTPUT.textContent = text;
}

/****************************
Dino World header
****************************/

/****************************
Footer
****************************/