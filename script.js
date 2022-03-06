var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");


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
        question: "Method that outputs a message to the web console is called a...",
        answers: {
            1: "Console.debug",
            2: "Console.count",
            3: "Console.log",
            4: "Console.clear"
        },
        correctAnswer: "3"
    },

    {
        question: "A symbol representing a quantity that assumes a range of values.",
        answers: {
            1:  "Object",
            2: "Variable",
            3: "Document",
            4: "Property"
        },
        correctAnswer: "2"
    },
    

    {
        question: "A variable you declare outside of a function is called a what?",
        answers: {
            1: "Local Scope",
            2: "Hoisting",
            3: "Global Scope",
            4: "Block Scope"
        },
        correctAnswer: "3"
    }
]

