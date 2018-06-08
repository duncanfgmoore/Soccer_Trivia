$(document).ready(function(){


function startScreen() {
    startGame = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
    $("#questionArea").html(startGame);  
    
};

startScreen();

//Click action to start the  game

$("#questionArea").on("click", ".start-button", function(event){
   event.preventDefault();

    createQuestion();
    timeWrapper();
    
});

//Click action to select an answer
$("body").on("click", ".answer", function(event){

    answerSelected = $(this).text();

    if (answerSelected === correctAnswers[questionCount])  {
        clearInterval(theClock),
        correctAnswer();
    } else {
        clearInterval(theClock),
        incorrectAnswer();
    }
});

//Click action to reset the game
$("body").on("click", ".reset-button", function(event) {

    gameReset();
});

});


// Function for correct answer
function correctAnswer () {
    wins++;
    gameText = "<p> Time Remaining: <span>" + timeLeft + "</span></p>" + "<p>Correct! The answer is:" + correctAnswers[questionCount] + "</p>" + "image goes here";
    $("#questionArea").html(gameText);

    setTimeout(wait, 3000);

}
//Function for incorrect answer

function incorrectAnswer () {
    losses++;
    gameText = "<p> Time Remaining: <span>" + timeLeft + "</span></p>" + "<p>Wrong! The answer is:" + correctAnswers[questionCount] + "</p>" + "image goes here";
    $("#questionArea").html(gameText);

    setTimeout(wait, 3000);

}

//Function for if no choice was made
function timeoutLoss() {
    unanswered++;
    gameText = "<p> Time Remaining: <span>" + timeLeft + "</span></p>" + "<p>You did not submit an answer!" + correctAnswers[questionCount] + "</p>" + "image goes here";
    $("#questionArea").html(gameText);

    setTimeout(wait, 3000);
}

//Function that creates the questions
function createQuestion() {
    gameText = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + questions[questionCount] + "</p><p class='first-answer answer'>A. " + answers[questionCount][0] + "</p><p class='answer'>B. "+answers[questionCount][1]+"</p><p class='answer'>C. "+answers[questionCount][2]+"</p><p class='answer'>D. "+answers[questionCount][3]+"</p>";
    $("#questionArea").html(gameText);
    
};


function wait() {

    if (questionCount < 9) {
        questionCount++;
        createQuestion();
        timeLeft = 20;
        timeWrapper();
    } else {

    (resultScreen())

    }
};

function timeWrapper() {
    theClock = setInterval(twentySeconds, 1000);
    function twentySeconds() {
        if (timeLeft === 0) {
            clearInterval(theClock);
            timeoutLoss();
        }
        if (timeLeft > 0) {
            timeLeft--;
        }
        $(".timer").html(timeLeft);
    }
}



//Function for result screen between questions

function resultScreen () {
    gameText = "<p>Time Remaining: <span>" + timeLeft + "</span></p>" 
    + "<p>You have made it through the quiz! Here's how you did." + "</p>" + "<p>Correct Answers: " + wins 
    + "</p>" + "<p>Wrong Answers: " + losses 
    + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
    $("#questionArea").html(gameText);
}
//Function to reset the game

function gameReset() {
    questionCount = 0;
    wins = 0;
    losses = 0;
    unanswered = 0;
    timeLeft = 20;
    createQuestion();
    timeWrapper();
}



//Setting up Variables

var timeLeft = 20;

var questions = [
"Who won the 1994 FIFA World Cup?",
"Which of these star soccer players has never played for Real Madrid?",
"According to the Offical FIFA rulebook, how long can a goalkeeper hold onto the ball for?",
"Anfield is the home of which English Premier League club?",
"Which of these players has never played for Manchester United?",
"Why did the Indian national team withdraw from the FIFA World Cup competition in 1950?",
"In the MLS in what city does teh team Chivas USA play?",
"What are teh home colors of the FC Barcelona soccer uniforms?",
"Who was the leading goal scorer in the English Premier League season 2017-2018?",
"Which of these teams is not playing in the EPL in the 2009-2010 season?"
];

var answers = [
["Italy", "Argentina", "Germany", "Brazil"],
["David Beckham", "Lionel Messi", "Zinedine Zidane", "Ronaldo"],
["3 Seconds", "5 Seconds", "10 Seconds", "30 Seconds"],
["Manchester United", "West Ham United", "Liverpool", "Everton"],
["Eric Cantona", "Bobby Charlton", "Mark Hughes", "Bobby Moore"],
["As a political protest", "Because they did not have enough players to field a full squad", "Because they could not play barefoot", "Because turbans were not allowed"],
["Carson, California", "Baltimore, Maryland", "Miami, Florida", "Phoenix, Arizona"],
["Orange and White", "Black and White", "Blue and Red", "Yellow and Blue"],
["Harry Kane", "Roberto Firmino", "Jamie Vardy", "Mohamed Salah"],
["Brimingham City", "Burnley FC", "Wigan Athletic", "Newcastle United"]
];

var correctAnswers = [
    "D. Brazil",
    "B. Lionel Messi",
    "B. 5 Seconds",
    "C. Liverpool",
    "D. Bobby Moore",
    "C. Because they could not play barefoot",
    "A. Carson, California",
    "C. Blue and Red",
    "D. Mohamed Salah",
    "D. Newcastle United"
];

var wins = 0;
var losses = 0;
var unanswered = 0;
var answerSelected;
var gameText;
var images;
var startGame;
var gameRestart;
var questionCount = 0;
var theClock;