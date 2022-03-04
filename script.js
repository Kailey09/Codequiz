var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

var buildQuiz = function() {

};

var showResults = function() {

};

var myQuestions = [
    {
        question: "Which one is an primitive data type?",
        answers: {
            1: "String",
            2: "Number",
            3: "Null",
            4: "All of the Above"
        },
        correctAnswer: "4"
    },
    {
        question: "A block of code designed to preform a particular task is called a... ",
        answers: {
            1: "Function",
            2: "Array",
            3: "Parameter",
            4: "Varible"
        },
        correctAnswer: "1"
    },

    {
        question: ""
    }
]
buildQuiz();

submitButton.addEventListener("click", showResults);