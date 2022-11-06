var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
var score;
var results = document.querySelector(".btn");
//Leaderboard update
var initialsEl = document.querySelector(".initials");
var scoreEl = document.querySelector("score");

// Questions that the user will be answering
var questionsEl = document.querySelector(".mcq-questions");
var answerButtonEl1 = document.querySelector("#answer1");
var answerButtonEl2 = document.querySelector("#answer2");
var answerButtonEl3 = document.querySelector("#answer3");
var answerButtonEl4 = document.querySelector("#answer4");
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
         answer:4,
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

// start code-quiz
startButton.addEventListener('click', startGame)

//WorkFlow
function startGame(){
    console.log("Start!");
    startTimer();
    timerCount = 60;
    score = 0;
    startButton.disabled = true;
    showQuestion();
}

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

  //Display Questions and MCQ Answers
function showQuestion() {
    insertQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionsEl.textContent = insertQuestion.question;
    answerButtonEl1.textContent = insertQuestion.answer1;
    answerButtonEl2.textContent = insertQuestion.answer2;
    answerButtonEl3.textContent = insertQuestion.answer3;
    answerButtonEl4.textContent = insertQuestion.answer4;

//Tests each click to the answer
answerButtonEl1.onclick = selectAnswer();
answerButtonEl2.onclick = selectAnswer();
answerButtonEl3.onclick = selectAnswer();
answerButtonEl4.onclick = selectAnswer();

// Select Answers to determine whether you lose time or move to the next question
function selectAnswer(event) {
    var buttonEl = event.target;
    if (buttonEl.matches('.btn')){
        console.log("hi")
    } else {
        console.log("try again")
};

}
}

// If the time runs out or quiz is completed
function timeOut() {
    if (timer = 0){
        questionsEl.textContent = "Game Over! Refresh the page to restart."
    }
    else (timer > 0 && questions > questions.length)
        completeQuiz()
}

// Storing information to be placed into leaderboard
function completeQuiz() {
    var Name = localStorage.setItem.prompt("Please type your initials");
    localStorage.setItem.score;
    localStorage.getItem.Name;
    localStorage.getItem.score;
    initialsEl.append(Name);
    scoreEl.append(score);
    }


    ERROR
    script.js:106 Uncaught TypeError: Cannot read properties of undefined (reading 'target')
    at selectAnswer (script.js:106:26)
    at showQuestion (script.js:99:27)
    at HTMLButtonElement.startGame (script.js:66:5)