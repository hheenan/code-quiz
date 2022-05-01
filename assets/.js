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

// alt styling
function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions (questions, quizContainer,){
        // code here
    }
}
function showResults(questions, quizContainer, resultsContainer){
    // code here
}
showQuestions (questions, quizContainer);

// on click show results
submitButoon.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

var myQuestions = [
    {
        question: "What is console.log used for in JavaScript?",
        answers: {
            a:'log the console', 
            b:'display error in console', 
            c:'diagnose or troubleshoot minor issues',
            d: 'same as return',
        },
    correctAnswer: 'c, "diagnose or troubleshoot minor issues'
    },
    {
        question: "What is the purpose of an empty array?",
        answers: {
            
        }
    }
]