var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What is your name?  ");

console.log("Welcome " + userName + " do you know Vignesh? ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right!");
    score++;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

var questions = [
  {
    question: "Where he is based out? ",
    answer: "bangalore",
  },
  {
    question: "What he is studying? ",
    answer: "bca",
  },
  {
    question: "What subject he loves the most ? ",
    answer: "computer science",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! You Scored ", score);
