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


let result = document.getElementById("result-num");
let resultText = document.getElementById("result-text")

function colorFunction(){
  let display = document.getElementById("color-background");
  let colorNum = Math.floor(Math.random()*3)
  let display2 = document.getElementById("color-background");
  display2.style.backgroundColor = numList[colorNum];
  document.getElementById("color-text").innerText = numList[colorNum];
}

function diceFunction(){
  let diceNum = Math.floor(Math.random()*6)
  let diceImage = [
    dice1.src, 
    dice2.src, 
    dice3.src, 
    dice4.src, 
    dice5.src, 
    dice6.src,
  ];
  let diceText = [
    `After clicking a link from a fan message, You woke up in your personal details, and private images in the internet, got your bank account emptied, and accounts hacked. You decided to end your story with your own hands.`,
    `Your address and phone number got exposed after having an argument with another YouTuber, and you developed PTSD after getting swatted multiple times, and receiving death threats. You lost 2M to flee to another place, and another 500K for multiple therapy sessions.`,
    `After 2 years of creating content on YouTube, a troll found your personal account where you post your views and opinions about countless controversial topics. You lost 10% of your subscribers, and gained another 8% of subscribers`,
    `While walking in a dark alley, you found yourself being threatened to empty your pockets by an unknown masked robber, but was dismissed after you got recognized by your own robber?!?! You gave him an autograph, and your robber treated you to a lunch in your favourite restaurant. You unexpectedly gained 5% more subscribers after the talking about the event online`,
    `In a hot sunny day, you unknowingly got filmed by someone while you're risking your life to apprehend a criminal in the middle of a kidnapping. You got your nose and left hand broken from the encounter. After a week, the video got reposted countless times, and reached in the eyes of the mainstream media. Some people criticized your decision, but majority praised you for your heroic act. You lost nearly 1M for the delicate surgery, and gained 85% more subscribers`,
    `You awoke to multiple notification alert from your phone. After checking it out, you found that your favourite popular international online influencer reacted to your reaction video of their reaction video of your reaction video reacting to their video reacting to your video. And other influencers started to play with the trend that you've created. You became viral and gained 3500% more subscribers in a span of 1 year.`
  ];
  result.innerText = diceResult[diceNum];
  document.getElementById("dice-image").src = diceImage[diceNum];
  document.getElementById("result-text").innerText = diceText[diceNum];






}


