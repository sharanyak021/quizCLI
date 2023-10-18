const readlineSync = require("readline-sync");
const chalk = require("chalk");
const enterName = readlineSync.question("Welcome to the Quiz. Please enter your name : ");
console.log("Welcome " + chalk.bold(enterName) + " to " + chalk.cyan.bold("THE FRIENDSHIP TEST"));
console.log(" ");

let score = 0;
function play(question,answer){
  let userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("You are right!"));
    score++;
  }else{
    console.log(chalk.red("You are wrong!"));
  }
  console.log("Your current score is : " + score);
  console.log("---------------------------------");
}

play("What is my name?", "sharanya");
play("Where do I live? ","hyderabad");
play("What's my favourite thing to do in free time?","Sleep");
play("What's my favourite sitcom?", "B99");

