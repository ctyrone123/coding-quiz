var question = document.getElementById('question');
var choices = Array.from(document.getElementsByClassName('answers'));

var currentQuestion = {};
var acceptingAnswers = false;
var questionCounter = 0;
var availableQuesions = [];
var countdown = 60;

var questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4,
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        choice1:  "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4,
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets",
        answer: 3,
        
    },
    {
        question: "Commmonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3,
        
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choice1: "commas",
        choice2: "quotes",
        choice3: "curly brackets",
        choice4: "parenthesis",
        answer: 2
    }
]

function startGame() {
    questionCounter = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

function getNewQuestion () {
    if (availableQuesions.length === 0) {
        return window.location.assign('/end.html');
    }
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

function timer() {
    countdown = countdown - 1;
    if (countdown < 60) {
        time.innerHTML = countdown;
    }

    if (countdown < 1) {
        window.clearInterval(update);
    }
};
update = setInterval("timer()", 1000);

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];
        if (selectedAnswer != currentQuestion.answer) {
            countdown = countdown - 10;
        };
        getNewQuestion();
    });
});

startGame();