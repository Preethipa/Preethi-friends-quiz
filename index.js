var readlineSync = require("readline-sync");

var score = 0;

//var highScores = [
  //{
    //name: "Suve",
    //score: 11,
  //},
  
 // {
    //name: "Yuvaraj",
    //score: 11,
 // }
//]

//input<< processing>>ouput
var userName = readlineSync.question("Whats your Name? ");

console.log("Welcome "+ userName + " Do you know Preethi? ");


//console.log("Yah! You did highScore: ", highScores.score);

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  //branching
  if (userAnswer === answer){
   
    console.log("Right");
    score = score+1;
  }else{
    
    console.log("Wrong");
  }
  console.log("Current Score: ", score);
  console.log("----------");
}
//play("Preethi would have long hair? ", "yes");
//play("Preethi's favourite food would be? ", "Biriyani");


// Array of objects
var questions = [{
  
   question: "Preethi would have long hair? " ,
  answer: "Yes",
   
  }, {
   question: "Preethi's favourite food would be? ",
   answer: "Biriyani"
  },{
   question: "Preethi's favourite colour would be? ",
   answer: "Blue"
  },{
   question: "Preethi  would like  dailymilk? ",
   answer: "No"
  },{
   question: "Preethi would most like in the world? ",
   answer: "Yuvaraj"
  },{
   question: "Preethi's nickename would be? ",
   answer: "Yuthika"
  },{
   question: "what is the weakness of Preethi? ",
   answer: "Sensitive"
},{
   question: "Preethi most like to doing would be? ",
   answer: "Drawing"
},{
   question: "Preethi would like traveling? ",
   answer: "Yes"
},{
   question: "Preethi like to have a long nail? ",
   answer: "Yes"
},{
   question: "Preethi mostly like to choose the sarees for wear? ",
   answer: "Yes"
  
}];

//loop
for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yah! You Scored: ",score); 

//console.log("Yah! You did highScore: ", highScores.score);

console.log("Thankyou for Playing!! ")

//console.log("Check out the Scores: "+ highScores.name , highScores.score);

//console.log(highScores.name);
//console.log(highScores.score);