console.log ("Do you want to play a game?")

var userInput = "yes"

if (userInput === "yes"){
  console.log("What is your name?");
}
else {
  console.log("Bye!")
}

var userName  = prompt ("name")
var enemyName = "Almighty Grant"
var userHealth = "40"
var enemyHealth= "10"
var wins= "0"

while(userHealth >0 && wins <3)
  {if(enemyHealth <=0);}
  {  wins++
  enemyHealth = 10; 
}
{Math.floor((Math.random() * 2) + 1);}
//repl.it is giving an error for an infinite loop? I cannot seem to figure out why
