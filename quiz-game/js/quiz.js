var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var progressText = document.getElementById("progressText");
var scoreText = document.getElementById("score");
var progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Which of these is not a Continent",
    choice1: "Madagacar",
    choice2: "Europe",
    choice3: "Africa",
    choice4: "Antartica",
    answer: 1
  },
  {
    question:
      "Google was founded by?",
    choice1: "Iniobong Benson",
    choice2: "Larry Pakinston",
    choice3: "None of these",
    choice4: "Laura Page",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' to a Javascript console?",
    choice1: "print('Hello World');",
    choice2: "console.log('Hello World');",
    choice3: "console.out('Hello World');",
    choice4: "printline('Hello World');",
    answer: 2
  },
   {
    question: "All but one is a search engine. Which?",
    choice1: "DuckDuckGo",
    choice2: "Bing Search",
    choice3: "Yahoo Seach",
    choice4: "Google Chrome",
    answer: 4
  },
     {
    question: "Select the odd one out",
    choice1: "Cameroon",
    choice2: "Nigeria",
    choice3: "South Africa",
    choice4: "Ghana",
    answer: 3
  },
   
];


const point = 4;
const totalQ = 5;

startQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= totalQ) {
    localStorage.setItem("mostRecentScore", score);
    
    return window.location.assign("score.html");
  }
    
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${totalQ}`;
  //progress bar
  progressBarFull.style.width = `${(questionCounter / totalQ) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(point);
    }
    

   var nextq = document.getElementById('nxt');  
   selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
       
       nextq.onclick = function() {getNewQuestion(),selectedChoice.parentElement.classList.remove(classToApply);};
    }, );
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startQuiz();
