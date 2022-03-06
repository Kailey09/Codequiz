var question = document.getElementById("question");
var quizContainer = document.getElementById("quiz-container");
var scoreCard = document.getElementById("scorecard");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var next = document.querySelectorAll("next");
var points = document.querySelector("score");
var span = document.querySelector("span");
var score = 0;
var i = 0





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
        answer: "Conole.log"
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
];

var displayQuestons = function() {
    for( var a = 0; a < span.length; a++);{
    } 

    question.innerHTML = "Q." + (i+1) + " " + myQuestions[i].question;

    option0.innerHTML = myQuestions[i].option[0];
    option1.innerHTML = myQuestions[i].option[1];
    option2.innerHTML = myQuestions[i].option[2];
    option3.innerHTML = myQuestions[i].option[3];

    stat.innerHTML = "Question" + (i+1) + " " + myQuestions.length
};

displayQuestons();