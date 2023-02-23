"use strict";
//display user name 
let uname = prompt("Enter your name here")

const x = document.querySelector("#hello");

function displayName(username) {
    if (username === null || username.length == 0) {
        x.innerHTML = "Hello";
    } else {
        x.innerHTML = `Hello ${username}`;
    }
}

displayName(uname)

//Guess Game

//random numb is assigned a # b/w 1 and 50 using this math algorithm
let randomNumber = Math.floor(Math.random() * 50) + 1;

//these const store a ref to the result paras in the HTML and uses to insert values into paras later in the code
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowHi = document.querySelector(".lowHi");

//these const store refs to the form text input and submit button and control submitting the guess
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//these two variables store a guess count of 1 and a reference to the reset button
let guessCount = 1; // sets the count to 1 - is this the players 1st go, sets guess paragraph to prev guesses 
let resetButton;



function checkGuess() {
    const userGuess = Number(guessField.value); //declare var & sets the val to crrent val inside txt field, run it thru Num to make sure its a num
    if (guessCount === 1) { 
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += `${userGuess} `;
    console.log(userGuess);

    if (userGuess === randomNumber) {  //checks if user guess is = to random num if yes they win
        lastResult.textContent = "Yay, you guessed correct!";

        lowHi.textContent = "";
        setGameOver();
    } else if (guessCount === 6) { // checks if this is users last turn 
        lastResult.textContent = "Whomp Whomp Whomp, you lost."; //if so, they lost
        lowHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "";

        if (userGuess < randomNumber) {  //if not they get either of these messages
            lowHi.textContent = "your guess is Too Low, take it up a notch";
        } else if (userGuess > randomNumber) {
            lowHi.textContent = "your guess is Too High, take it down a notch";
        }

    }
    guessCount++; //this adds 1 to the users turn til they get to 6 guesses and empties the value out to focus the txt form field again
    guessField.value = "";
    guessField.focus();
    guesses.style.boxShadow = '3px 3px 6px black';
    lowHi.style.boxShadow = '3px 3px 6px black';
    lastResult.style.boxShadow = '3px 3px 6px black';
}

checkGuess()

guessSubmit.addEventListener("click", checkGuess); //adds an event listener to the guessSubmit button

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start New Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}


function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 50) + 1;
}





//Mini game about me

let score = 0
function quizGame() {

    let school = prompt("Did I go to Marymount for undergrad?")
    if (school.toLowerCase() == "yes" || school.toLowerCase() == "y") {
        alert("Correct");
        score++;
        //console.log("correct answer is yes")
    }
    else {
        alert("Incorrect, you should read.");
    }
    let work = prompt("Did I work at COOP Careers?")
    if (work.toLowerCase() == "yes" || work.toLowerCase() == "y") {
        alert("Correct");
        score++;
        //console.log("correct answer is yest")
    }
    else {
        alert("Incorrect, are you sure you read?");
    }

    let hood = prompt("Did I live in Paris?")
    if (hood.toLowerCase() == "no" || hood.toLowerCase() == "n") {
        alert("Correct");
        score++;
        //console.log("correct answer is no")
    }
    else {
        alert("Incorrect, it's too dirty");
    }

    let hobby = prompt("Am I interested in The Arts?")
    if (hobby.toLowerCase() == "yes" || hobby.toLowerCase() == "y") {
        alert("Correct");
        score++;
        //console.log("correct answer is yes")
    }
    else {
        alert("Incorrect");
    }
    let active = prompt("Do I like sports?")
    if (active.toLowerCase() == "no" || active.toLowerCase() == "n") {
        alert("Correct, too boring");
        score++;
        //console.log("correct answer is no")
    }
    else {
        alert("Incorrect");
    }
    alert("Thank you " + uname + "! You made a " + score + "/5.");
}

