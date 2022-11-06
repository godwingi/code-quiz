var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
var timerDecrease;
var score = 0;
var results = document.querySelector("#results");

// Questions that the user will be answering
var questionsEl = document.querySelector(".mcq-questions");
var answerButtonEl = document.querySelector(".btn");
var insertQuestion = []; //where the 'new' question needs to go
var questions = [
    {   question: "What is a DOM?",
         answer1: "Short form of Domino",
         answer2: "Acronym for Document Object Model",
         answer3: "Short-hand for the word Domestic",
         answer4: "Acronym for Do Only Media Queries",
         answer:2,
    },
    {   question: "How can you get text to show onto HTML using JavaScript?",
         answer1: "getElementById",
         answer2: "querySelector",
         answer3: "appendChild",
         answer4: "textContent",
         answer:3,
    },
    {   question: "True or False is considered what type of variable?",
         answer1: "Undefined",
         answer2: "String",
         answer3: "Number",
         answer4: "Boolean",
         answer:4,
    },
    {   question: "The following operator compares both the value and type:",
         answer1: "===",
         answer2: "&&",
         answer3: "||",
         answer4: "!=",
         answer:1,
    },
    {   question: "Styling primarily belongs to which language",
         answer1: "JavaScript",
         answer2: "HTML",
         answer3: "CSS",
         answer4: "API's",
         answer:3,
    }
];


//Leaderboard update
var initals = document.querySelector(".initals");
var score = document.querySelector("score");

//reset-button for leaderboard
var resetButton = document.querySelector(".reset-button");

// functioning code
startButton.addEventListener('click', startGame)

//WorkFlow
function startGame(){
    console.log("Start!");
    startTimer();
    timerCount = 60;
    startButton.disabled = true;
    showQuestion();
}

function showQuestion() {
   for (var i = questions; i < questions.length; i++){
    insertQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionsEl.append(insertQuestion[i].question);
    if (response == questions[i].answer){
        score++;
        alert("Correct!")
    } else {
        timerCount-10;
    }
}; 


    //for each question...

}

function setNextQuestion() {
    questions.appendChild(questionsEl);
    // conditions: if answer wrong, stays on same 
    // question, have a try again prompt
    // if answer right next question appears
}

// function selectAnswer() {
 
//   conditions:  if right move to next question, if wrong decrease 
//  10seconds
// }

// function timeOut() {

//     conditions: Game over prompt
// }

// function completeQuiz() {

//     conditions: this is if all question are completed in timeOut, 
//     initals and score can be set at this point and 
//     updated into the chart
// }

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (score && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
  }