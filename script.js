"use strict";
//display user name 
let uname = prompt("Enter your name here")

const x = document.querySelector("#hello");

function displayName(username){
    if(username === null || username.length == 0){
        x.innerHTML = "Hello";   
    } else{
        x.innerHTML =  `Hello ${username}`;
    }
}

displayName(uname) 

//Guess Game

 let randomNumber = Math.floor(Math.random()*50) + 1;
 const guesses = document.querySelector(".guesses");
 const lastResult = document.querySelector(".lastResult");
 const lowHi = document.querySelector(".lowHi");

 const guessSubmit = document.querySelector(".guessSubmit");
 const guessField = document.querySelector(".guessField");

 let guessCount = 1;
 let resetButton;
 function checkGuess(){
    const userGuess = Number(guessField.value);
    if(guessCount === 1 ) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += `${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.textContent = "You got it!";
        
        lowHi.textContent = "";
        setGameOver();
    } else if (guessCount === 6) {
        lastResult.textContent = "Whomp Whomp Whomp, you lost.";
        lowHi.textContent = "";
        setGameOver()
    } else {
        lastResult.textContent = "Nope!";
        if (userGuess< randomNumber) {
            lowHi.textContent = "Yo last guess was too dang low";
        } else if (userGuess> randomNumber) {
            lowHi.textContent = "Yo last guess was too dang High";
        }
        
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();

 }

 checkGuess(){
    guessSubmit.addEventListener("click",checkGuess);
 }

 function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
 }

function resetgame(){
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
    if (school.toLowerCase() == "yes" || school.toLowerCase() =="y") {
        alert("Correct");
         score++;
        //console.log("correct answer is yes")
    }
    else{ 
        alert("Incorrect, you should read."); 
    }
    let work = prompt("Did I work at COOP Careers?")
    if (work.toLowerCase() == "yes" || work.toLowerCase() =="y") {
        alert("Correct");
        score++;
        //console.log("correct answer is yest")
    }
    else{ 
        alert("Incorrect, are you sure you read?"); 
    }

    let hood = prompt("Did I live in Paris?")
    if (hood.toLowerCase() == "no" || hood.toLowerCase() =="n") {
        alert("Correct");
         score++;
        //console.log("correct answer is no")
    }
    else{ 
        alert("Incorrect, it's too dirty"); 
    }
    
    let hobby = prompt("Am I interested in The Arts?")
    if (hobby.toLowerCase() == "yes" || hobby.toLowerCase() =="y") {
        alert("Correct");
         score++;
        //console.log("correct answer is yes")
    }
    else{ 
        alert("Incorrect"); 
    }
    let active = prompt("Do I like sports?")
    if (active.toLowerCase() == "no" || active.toLowerCase() =="n") {
        alert("Correct, too boring");
         score++;
        //console.log("correct answer is no")
    }
    else{ 
        alert("Incorrect"); 
    }
    alert("Thank you " + uname + "! You made a " + score + "/5." );
}  
 
    
 

