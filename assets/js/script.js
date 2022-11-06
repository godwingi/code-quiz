//quiz variables
var startButton = document.querySelector(".start-button");
var results = document.querySelectorAll(".btn");
console.log(results);
var score = 0;

//timer variables
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
var isWin = false

//Leaderboard variables
var initialsEl = document.querySelector(".initials");
var scoreEl = document.querySelector(".score");

// Questions that the user will be answering
var questionsEl = document.querySelector(".mcq-questions");
var answerButtonEl1 = document.querySelector("#answer1");
var answerButtonEl2 = document.querySelector("#answer2");
var answerButtonEl3 = document.querySelector("#answer3");
var answerButtonEl4 = document.querySelector("#answer4");
var insertQuestion = []; //where the 'new' question needs to go
var questionsIndex = 0
var questions = [
    {   question: "What is a DOM?",
         answer1: "Short form of Domino",
         answer2: "Acronym for Document Object Model",
         answer3: "Short-hand for the word Domestic",
         answer4: "Acronym for Do Only Media Queries",
         answer: "Acronym for Document Object Model",
    },
    {   question: "How can you get text to show onto HTML using JavaScript?",
         answer1: "getElementById",
         answer2: "querySelector",
         answer3: "appendChild",
         answer4: "textContent",
         answer: "textContent",
    },
    {   question: "True or False is considered what type of variable?",
         answer1: "Undefined",
         answer2: "String",
         answer3: "Number",
         answer4: "Boolean",
         answer: "Boolean",
    },
    {   question: "The following operator compares both the value and type:",
         answer1: "===",
         answer2: "&&",
         answer3: "||",
         answer4: "!=",
         answer: "===",
    },
    {   question: "Styling primarily belongs to which language",
         answer1: "JavaScript",
         answer2: "HTML",
         answer3: "CSS",
         answer4: "API's",
         answer: "CSS",
    }
];

// start code-quiz
startButton.addEventListener('click', startGame)

//WorkFlow
function startGame(){
    console.log("Start!");
    startTimer();
    timerCount = 10;
    score++;
    startButton.disabled = true;
    showQuestion();
}


// The setTimer function starts and stops the timer
//     Sets timer
    function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000)
    };

// Select Answers to determine whether you lose time or move to the next question
function selectAnswer(event){
    var buttonEl = event.target;
    // console.log(buttonEl.innerText);
    // console.log(questions[0].answer)
    if(buttonEl.innerText === questions[questionsIndex].answer){
        console.log("Correct!")
        scoreEl.textContent = score++;
        questionsIndex++;
        showQuestion();
    }
     else {
        console.log("Incorrect!")
        setTimeout(setInterval -15);
    }
};

  //Display Questions and MCQ Answers
function showQuestion() {
    // insertQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionsEl.textContent = questions[questionsIndex].question;
    answerButtonEl1.textContent = questions[questionsIndex].answer1;
    answerButtonEl2.textContent = questions[questionsIndex].answer2;
    answerButtonEl3.textContent = questions[questionsIndex].answer3;
    answerButtonEl4.textContent = questions[questionsIndex].answer4;
}
for(var i = 0; i < results.length; i++) {
    results[i].addEventListener('click', selectAnswer);
}

//Win Game Prompt, and Storing Score and Name into Storage
function winGame (){
        questionsEl.textContent = "You Win!"
        var name = window.prompt("Enter your initals");
        localStorage.setItem("Name", name);
        localStorage.setItem("score", score);
        setNameScore()
}

function loseGame (){
    timerCount = 10;
    startGame;
    questionsEl.textContent = "Game Over! Try Again to Save Your Score?"
}   

//Displaying Stored information into leaderbaord
function setNameScore (){
    scoreEl.textContent = localStorage.getItem("score");
    initialsEl.textContent = localStorage.getItem("Name");
}