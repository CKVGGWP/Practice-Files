// Passenger App

// Greetings

let message = ["Hi! My name is", "Christian", "Kyle", "Valdez"];
let welcomeMessage = document.getElementById("welcome-el");

for (let m = 0; m < message.length; m++) {
  welcomeMessage.innerHTML = message.join(" ");
}

// Increment Buttons

let incrementBTN = document.getElementById("increment-btn");
let incrementCountCont = document.getElementById("count-el");
let count = 0;

incrementBTN.onclick = function incrementNumbers() {
  count += 1;
  incrementCountCont.innerText = count;
};

// Save Buttons

let saveBTN = document.getElementById("save-btn");
let paragraphEl = document.getElementById("paragraph-el");
let numberReset = 0;

saveBTN.onclick = function () {
  let countStr = count + " - ";
  paragraphEl.innerHTML += countStr;
  incrementCountCont.innerHTML = numberReset;
  count = 0;
};

// Practice

let fName = "Christian Kyle ";
let lName = "Valdez";
let fullName = fName + lName;
let practiceGreet = "Hi there, ";

function practiceGreetings() {
  let greet = practiceGreet + fullName;
  console.log(greet);
}

practiceGreetings();

// Point Calculator

let myPoint = 3;
let addPoints = document.getElementById("addPoint");
let removePoints = document.getElementById("removePoint");
let points = document.getElementById("myPoints");
let errorParagraph = document.getElementById("error");

points.innerText = myPoint;

function addPoint() {
  myPoint += 3;
  points.innerText = myPoint;
  if (myPoint > 0) {
    errorParagraph.style.display = "none";
  }
}

function removePoint() {
  if (myPoint == 0) {
    myPoint -= 0;
    errorParagraph.innerText = "Points can't be a negative number!";
    errorParagraph.style.display = "block";
    points.innerText = myPoint;
  } else {
    myPoint -= 1;
    errorParagraph.style.display = "none";
    points.innerText = myPoint;
  }
}

// Simple Calculator

let num1 = 27;
let num2 = 9;
let answer = document.getElementById("answer");
document.getElementById("firstNum").innerText = num1;
document.getElementById("secondNum").innerText = num2;

let addBTN = document.getElementById("add");
let subtractBTN = document.getElementById("subtract");
let multiplyBTN = document.getElementById("multiply");
let divideBTN = document.getElementById("divide");

addBTN.onclick = function () {
  let result = num1 + num2;
  answer.innerText = result;
};

subtractBTN.onclick = function () {
  let result = num1 - num2;
  answer.innerText = result;
};

multiplyBTN.onclick = function () {
  let result = num1 * num2;
  answer.innerText = result;
};

divideBTN.onclick = function () {
  let result = num1 / num2;
  answer.innerText = result;
};

let player1Time = 100;
let player2Time = 200;

function fastestPlayerTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

let fastest = fastestPlayerTime();

console.log(fastestPlayerTime());
console.log(fastest);

// Blackjack Game

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let isWon = false;
let lives = 1;
let message1 = "";
let startMessage = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let livesEl = document.getElementById("lives");
let credits = document.getElementById("credits");
let startGame = document.getElementById("start-game");

let player = {
  // Objects
  // You can put functions inside of objects
  name: "CK",
  chips: 145,
  youWon: function () {
    console.log("You won!");
  },
};

player.youWon();

livesEl.innerHTML = "Lives: " + lives;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function restartGame() {
  startGame.innerText = "Start Game";
  lives += 1;
  livesEl.innerHTML = "Lives: " + lives;
  player.chips += 145;
  credits.innerHTML = player.name + ": $" + player.chips;
}

startGame.onclick = function () {
  if (startGame.innerText === "Restart Game") {
    restartGame();
  }
  if (isWon === true) {
    restartGame();
  }
  isAlive = true;
  if (isAlive === true) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
};

function renderGame() {
  sumEl.innerHTML = "Sum: " + sum;
  cardsEl.innerHTML = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += cards[i] + " - ";
  }

  if (sum < 21) {
    message1 = "Do you want to draw another card?";
  } else if (sum === 21) {
    hasBlackjack = true;
    message1 = "Blackjack!";
    startGame.innerText = "Another Game?";
    isWon = true;
  } else {
    lives -= 1;
    livesEl.innerHTML = "Lives: " + lives;
    if (lives < 1) {
      isAlive = false;
      if (isAlive === false) {
        message1 = "You lost the game!";
        startGame.innerText = "Restart Game";
        player.chips -= player.chips;
      }
    } else if (lives >= 1) {
      startGame.innerText = "Do you want to play another game?";
      player.chips -= player.chips;
    }
  }
  credits.innerHTML = player.name + ": $" + player.chips;
  startMessage.innerHTML = message1;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false && isWon === false) {
    newCardFunc();
  } else if (hasBlackjack === true && isWon === true) {
    newCardFunc();
  } else {
    message1 = "You cannot draw more cards!";
  }
  startMessage.innerHTML = message1;
}

function newCardFunc() {
  let nextCard = getRandomCard();
  cards.push(nextCard);
  sum += nextCard;
  renderGame();
}

let sampleObject = {
  place: ["Lipa", "Tanauan"],
  fare: 28,
  isFree: true,
};

console.log(sampleObject.fare, sampleObject.place);

let samplePerson = {
  myName: "CK",
  myAge: 21,
  myCountry: "Philippines",
};

function logData() {
  console.log(
    samplePerson.myName +
      " is " +
      samplePerson.myAge +
      " years old" +
      " and lives in the " +
      samplePerson.myCountry
  );
}

console.log(logData());

let personAge = 2;

if (personAge < 6) {
  console.log("You have a free ride!");
} else if (personAge <= 17) {
  console.log("You have a child discount!");
} else if (personAge <= 26) {
  console.log("Student Discount!");
} else if (personAge <= 66) {
  console.log("Full Price!");
} else {
  console.log("Senior Discount!");
}

let largeCountries = ["China", "India", "USA", "Canada", "Middle East"];
console.log("Top 5 Countries in the World: ");

for (let c = 0; c < largeCountries.length; c++) {
  console.log(" - " + largeCountries[c]);
}

let countries = ["Tuvalu", "India", "USA", "Canada", "Monaco"];

countries.pop();
countries.push("Pakistan");
countries.shift();
countries.unshift("China");

console.log(countries);

let dayofMonth = 14;
let weekday = "Friday";

if (dayofMonth === 13 && weekday === "Friday") {
  console.log("😱");
} else {
  console.log("Not Scary!");
}

let hands = ["Rock", "Paper", "Scissors"];

function gameRPS() {
  let Ans = Math.floor(Math.random() * 3);
  return hands[Ans];
}

console.log(gameRPS());

let fruit = ["🍎", "🍊", "🍊", "🍊", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sortFruits() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.innerHTML += fruit[i] + " ";
    } else {
      orangeShelf.innerHTML += fruit[i] + " ";
    }
  }
}

sortFruits();
