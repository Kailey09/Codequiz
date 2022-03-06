var questions = document.getElementById("questions");
var quizContainer = document.getElementById("quiz-container");
var scoreBoard = document.getElementById("scoreboard");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var options = [
    option0,
    option1,
    option2,
    option3
]

var timeLeftSpan = document.getElementById("time-left");

var next = document.getElementById("next");
var points = document.querySelector("score");
var span = document.querySelector("span");
var score = 0;


var currentQuestion = 0;
var timeLeft = 75;
var timerInterval;



var myQuestions = [
    {
        question: "Which one is an primitive data type?",
        option: [ "String", "Number", "Null", "All of the Above"],
        answer: "All of the Above"
    },
    
    {
        question: "A block of code designed to preform a particular task is called a... ",
        option: [ "Function", "Array", "Parameter", "Varible"],
        answer: "Function"
    },

    {
        question: "Method that outputs a message to the web console is called a...",
        option: [ "Console.debug", "Console.count", "Console.log", "Console.clear"],
        answer: "Console.log"
    },

    {
        question: "A symbol representing a quantity that assumes a range of values.",
        option: [ "Object", "Variable", "Document", "Property"],
        answer: "Variable"
    },
    

    {
        question: "A variable you declare outside of a function is called a what?",
        option: [ "Local Scope", "Hoisting", "Global Scope", "Block Scope"],
        answer: "Global Scope"
    }
]

var startTimer = function() {

    timerInterval = setInterval(function () {
        timeLeftSpan.textContent = timeLeft;
        timeLeft--
    }, 1000)
}

var displayQuestions = function() {
    question.innerHTML = "Q." + (currentQuestion+1) + " " + myQuestions[currentQuestion].question;
    
    // option0.textContent = myQuestions[currentQuestion].option[0];
    // option1.textContent = myQuestions[currentQuestion].option[1];
    // option2.textContent = myQuestions[currentQuestion].option[2];
    // option3.textContent = myQuestions[currentQuestion].option[3];

    for( var i = 0; i < options.length; i++) {
        options[i].textContent = myQuestions[currentQuestion].option[i];
    }; 
};

var calculate = function(s) {
    if (s.innerHTML === myQuestions[i].answer && score < question.length){
        score = score + 1;
    }


}


var nextQuestion = function() {
    currentQuestion++;

    if(currentQuestion < myQuestions.length) {
        displayQuestions();
    } else {
        clearInterval(timerInterval)
        endQuiz()
    }

};

var localStorage = function () {


}

var endQuiz = function () {
    questions.style.display = "none";
    scoreBoard.style.display = "block";

    score = timeLeft;
    alert("Your score is " + score)
}


displayQuestions();
startTimer();

next.addEventListener("click", nextQuestion);

