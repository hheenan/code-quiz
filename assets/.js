// start time variable
let secondsLeft= 100;

// score count
let score = 0

// question count 
var questionCount = 0;

// element timer
let timer = document.getElementById("timer")

// timer start on click of button
function setTime () {
    displayQuestions();

}
// question title
let questionDiv = document.getElementById("question-div");
// div for answers and results
let answers = document.getElementById("results");
var choices = documents.getElementById("choices");
