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
// alt styling
function generateQuiz (questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer,){
        // code here
    }
function showResults(questions, quizContainer, resultsContainer){
    // code here
    }
showQuestions(questions, quizContainer);

// on click show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
    }
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
            a:'to output a value of zero',
            b:'an empty array is ineffecient',
            c:'to correct errors on the array',
            d:'improve a programs performance',
        },
    correctAnswer: 'd, improve a programs performance ex. memory access'
    },
    {
        question: "What is JavaScript?",
        answers: {
            a:'a single roast origin coffee',
            b:'the same thing as Java',
            c:'client-side scripting language',
            d:'object-based programming language'
        },
    correctAnswer: 'd, object-based programming. client and server side language'
    },
    {
        question:"Which software company developed JavaScript?",
        answers: {
            a: 'Facebook',
            b: 'Tesla',
            c: 'Netscape',
            d: 'Twitter',
        },
    correctAnswer: 'c, Netscape'
    },
    {
        question:"Which symbol is used for single line comments in JavaScript?",
        answers: {
            a: '$',
            b: '/*',
            c: '//',
            d: '><',
        },
    correctAnswer:'c, and /* for multi-line comments */'
    }
];
// store output and answers
function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    // questions
    for(var i=0; i<questions.length; i++){
        // reset list
        answers = [];
        // each available answer
        for(letter in questions[i].answers){
            // html radio button
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letters+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                +'</label>'
            );
        }
    // question and output as answers
    output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class ="answers">' + answers.join('') + '</div>'
            );
        }
    quizContainer.innerHTML = output.join('');
}
showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resultsContainer){

    var answerContainers = quizContainer.querySelectorAll('.answers');

// keeping track of answers
    var userAnswer = '';
    var numCorrect = 0;

for(var i=0; i<questions.length; i++){

    // identify select answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    // if statement
    if(userAnswer===questions[i].correctAnswer){
        numCorrect++;
    }
    else{
        answerContainer[i].style.color = 'red';
    }
}
resultsContainer.innterHTML = numCorrect = ' out of ' + questions.length;
}
// show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

var quizContainer = document.getElementById('question');
var resultsContainer = document.getElementById('score');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);