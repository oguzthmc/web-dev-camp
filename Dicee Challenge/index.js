var randomDiceNumber1 = Math.floor(Math.random() * 6) + 1;   // 1-6
var randomDiceNumber2 = Math.floor(Math.random() * 6) + 1;   // 1-6

var randomImageSource1 = "images/dice" + randomDiceNumber1 + ".png"; // images/dice1.png - images/dice6.png
var randomImageSource2 = "images/dice" + randomDiceNumber2 + ".png"; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomDiceNumber1 > randomDiceNumber2) {
    document.querySelector("h1").innerHTML = 'Player 1 Wins! 🏆'
} else if (randomDiceNumber2 > randomDiceNumber1) {
    document.querySelector("h1").innerHTML = 'Player 2 Wins! 🏆'
} else{
    document.querySelector("h1").innerHTML = 'Draw!'
}
