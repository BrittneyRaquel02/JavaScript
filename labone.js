console.log ("Do you want to play a game?")

var userInput = "yes"

if (userInput === "yes"){
  console.log("What is your name?");
}
else {
  console.log("Bye!");
}

var userName  = prompt ("name");
var enemyName = "Almighty Grant";
var userHealth = "40";
var enemyHealth = "10";
var wins = "0";

while(userHealth >0 && wins <3){
 var damage=getRandomInt(3);
    userHealth = userHealth-damage;
    console.log("You lost"+ damage + "points");
    damage = getRandomInt(3);
    enemyHealth = enemyHealth-damage;
    console.log(`${enemyName} lost ${damage} points`);
    
    
    
    if (enemyHealth <=0){
    wins = wins+1;
    enemyHealth = 10
      
    }
    
    
}
    
    
    
    
    
if(enemyHealth === "0" && wins === "3"){
console.log("You won!");
}
if(userHealth === "0");{
  console.log("You lose!");
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
