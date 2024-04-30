let num = 4;


console.log("math round: " + Math.round(num));

console.log("math cell: " + Math.ceil(num));

console.log("math floor: " + Math.floor(num));

console.log("math trunc: " + Math.trunc(num));

console.log("math pow: " + Math.pow(num, 2));

console.log("math squared: " + Math.sqrt(num));

console.log("math min: " + Math.min(1,2,3,4,5))

console.log("math max: " + Math.max(1,2,3,4,5))

console.log("math random: " + (Math.floor(Math.random()*101)))

// function random(){
//   let display_div = document.getElementById("color-background");
//   display_div.innerText = "Math.random " + Math.floor(Math.random()*101)
//



// Big Break
//
//
//
//
//

document.getElementById("button").onclick = function(){colorFunction()};
document.getElementById("dice-button").onclick = function(){diceFunction()};


var dice1 = document.createElement("img");
var dice2 = document.createElement("img");
var dice3 = document.createElement("img");
var dice4 = document.createElement("img");
var dice5 = document.createElement("img");
var dice6 = document.createElement("img");
dice1.src = "images/dice 1.jpeg";
dice2.src = "images/dice 2.jpeg";
dice3.src = "images/dice 3.jpeg";
dice4.src = "images/dice 4.jpeg";
dice5.src = "images/dice 5.jpeg";
dice6.src = "images/dice 6.jpeg";

let numList = ["RED", "BLUE", "YELLOW",];


let diceResult = [1,2,3,4,5,6];


let result = document.getElementById("result-num")

function colorFunction(){
  let display = document.getElementById("color-background");
  let colorNum = Math.floor(Math.random()*3)
  let display2 = document.getElementById("color-background");
  display2.style.backgroundColor = numList[colorNum];
  document.getElementById("color-text").innerText = numList[colorNum];
}

function diceFunction(){
  let diceNum = Math.floor(Math.random()*6)
  let diceImage = [dice1.src, dice2.src, dice3.src, dice4.src, dice5.src, dice6.src,];
  result.innerText = diceResult[diceNum];
  document.getElementById("dice-image").src = diceImage[diceNum];
}


