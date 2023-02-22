/*Your JS file must contain a 'use strict' declaration at the top, and your javascript file must be linked in your html file as an external script file.

Make sure that all code is cleanly written with correct indentation and syntax. Look at an example JavaScript Style Guide. Note that your JS must pass the rules in the linter that you installed.

Follow the Add, Commit, Push process. It should be evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.*/
"use strict";

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

 
let score = 0
function quizGame() {
   
    let school = prompt("Did I go to Marymount for undergrad?")
    if (school.toLowerCase() == "yes" || school.toLowerCase() =="y") {
        alert("Correct");
         score++;
        
    }
    else{ 
        alert("Incorrect"); 
    }
    let work = prompt("Did I work at COOP Careers?")
    if (work.toLowerCase() == "yes" || work.toLowerCase() =="y") {
        alert("Correct");
        score++;
        
    }
    else{ 
        alert("Incorrect"); 
    }

    let hood = prompt("Did I live in Paris?")
    if (hood.toLowerCase() == "no" || hood.toLowerCase() =="n") {
        alert("Correct");
         score++;
        
    }
    else{ 
        alert("Incorrect"); 
    }
    
    let hobby = prompt("Am I interested in The Arts?")
    if (hobby.toLowerCase() == "yes" || hobby.toLowerCase() =="y") {
        alert("Correct");
         score++;
        
    }
    else{ 
        alert("Incorrect"); 
    }
    let active = prompt("Do I like sports?")
    if (active.toLowerCase() == "no" || active.toLowerCase() =="n") {
        alert("Correct");
         score++;
        
    }
    else{ 
        alert("Incorrect"); 
    }
    alert("Thank you " + uname + "!. You made a " + score + " out of 5!" );
}  
 
    
 

