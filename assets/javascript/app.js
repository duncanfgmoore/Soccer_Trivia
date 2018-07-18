$(document).ready(function(){


function startScreen() {
    startGame = "<p class='text-center mainButton'><a class='btn btn-info btn-md btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
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
    gameText = "<p class='result'> Time Remaining: <span>" + timeLeft + "</span></p>" + "<p class='result'>Correct! The answer is: " + correctAnswers[questionCount] + "</p>" + gifArray[questionCount];
    $("#questionArea").html(gameText);

    setTimeout(wait, 3000);

}
//Function for incorrect answer

function incorrectAnswer () {
    losses++;
    gameText = "<p class='result'> Time Remaining: <span>" + timeLeft + "</span></p>" + "<p class='result'>Wrong! The answer is: " + correctAnswers[questionCount] + "</p>" + "<img src='assets/images/lose.gif'>";
    $("#questionArea").html(gameText);

    setTimeout(wait, 3000);

}

//Function for if no choice was made
function timeoutLoss() {
    unanswered++;
    gameText = "<p class='result'> Time Remaining: <span>" + timeLeft + "</span></p>" + "<p class='result'>You did not submit an answer! The answer is " + correctAnswers[questionCount] + "</p>" + "<img src='assets/images/timesup.gif'>";
    $("#questionArea").html(gameText);

    setTimeout(wait, 3000);
}

//Function that creates the questions
function createQuestion() {
    gameText = "<p id='timer'>Time Remaining: <span class='timer'>20</span></p><p id='question'>" + questions[questionCount] + "</p><p class='first-answer answer'>A. " + answers[questionCount][0] + "</p><p class='answer'>B. "+answers[questionCount][1]+"</p><p class='answer'>C. "+answers[questionCount][2]+"</p><p class='answer'>D. "+answers[questionCount][3]+"</p>";
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
    gameText = "<p class='result'>Time Remaining: <span>" + timeLeft + "</span></p>" 
    + "<p class='result'>You have made it through the quiz! Here's how you did." + "</p>" + "<p class='result'>Correct Answers: " + wins 
    + "</p>" + "<p class='result'>Wrong Answers: " + losses + "</p>" + "<p class='result'>Unanswered Questions: " + unanswered + "</p>"
    + "<p class='text-center reset-button-container'><a class='btn btn-info btn-md btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
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
"In the MLS in what city does the team Chivas USA play?",
"What are the home colors of the FC Barcelona soccer uniforms?",
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

var gifArray = new Array();
    gifArray[0] = "<img src='assets/images/brazil.gif'>";
    gifArray[1] = "<img src='assets/images/messi.gif'>";
    gifArray[2] = "<img src='assets/images/goalie.gif'>";
    gifArray[3] = "<img src='assets/images/liverpool.gif'>";
    gifArray[4] = "<img src='assets/images/bobby.jpeg'>";
    gifArray[5] = "<img src='assets/images/barefoot.gif'>";
    gifArray[6] = "<img src='assets/images/chivas.gif'>";
    gifArray[7] = "<img src='assets/images/barca.gif'>";
    gifArray[8] = "<img src='assets/images/salah.gif'>";
    gifArray[9] = "<img src='assets/images/newcastle.gif'>";



