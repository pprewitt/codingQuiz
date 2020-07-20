
var countdownEl = document.getElementById('countdown');
var questionContainer = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerBtns = document.getElementById('answer-buttons');
document.addEventListener('DOMContentLoaded', startGame)
var secondsLeft = 80;
var score = document.getElementById('score');
var questionIndex = 0;
var inProgress = false;
var player= document.getElementById('player');





function startGame(){

    console.log('started');
    questionContainer.classList.remove('hide');
    showQuestion();
    startTimer();
    inProgress = true;
};


function showQuestion(){
    var question = questions[questionIndex];
    resetQuestionCard();
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        };
        button.addEventListener('click', selectAnswer);
        answerBtns.appendChild(button);
        
    });
};
function resetQuestionCard() {
    clearStatusClass(document.body);
    while (answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    };
};
function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerBtns.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct);
    });
    if (selectedButton=!correct){
        timerDeduct();
    };
    if (questionIndex+1<questions.length){
        questionIndex++;
        setTimeout(showQuestion, 650);
    } else {
        inProgress= false;
        gameOver();
           
    };
    
    
};
function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');
        
    } else {
        element.classList.add('wrong');
        
        
    };
};
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function gameOver(){
    const highScoresList = document.getElementById("highScoresList");
    var playerScore = secondsLeft;
    var toggleEL = document.getElementById('toggle');
    questionEl.innerText='Game Over';
    resetQuestionCard();
    var person = prompt("Please enter your initials!",  "XX");
    if (person == null || person == "") {
        txt = "Player not recorded.";
     };
    toggleEL.innerText="Score:"; 
    var scoreButton = document.getElementById('score-btn');
    scoreButton.classList.remove('hide');
    
        var thisScore ={score: playerScore, initials: person};
        var highScore = JSON.parse(localStorage.getItem('highScore')) || [];
        
        highScore.push(thisScore);
        localStorage.setItem('highScore', JSON.stringify(highScore));
        highScore.sort((a, b)=>b.thisScore - a.thisScore);
            highScore.splice(5);
        
    
    

    
    };




function timerDeduct(){
    (secondsLeft-=10);
};

function startTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdownEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          gameOver();
        };
        if (questionIndex===questions.length-1) {
            clearInterval(timerInterval)
            
        }

      }, 1000);
    
};


const questions = [
    {
        question: 'Question 1?',
        answers: [
           { text: '1', correct: false },
           { text: '2', correct: true },
           { text: '3', correct: false },
           { text: '4', correct: false },

        ]
    },
    {
        question: 'Question 2?',
        answers: [
           { text: '5', correct: true },
           { text: '6', correct: false },
           { text: '7', correct: false },
           { text: '8', correct: false },

        ]
    },
    {
        question: 'Question 3?',
        answers: [
           { text: '9', correct: false },
           { text: '10', correct: false },
           { text: '11', correct: true },
           { text: '12', correct: false },

        ]
    },
    {
        question: 'Question 4?',
        answers: [
           { text: '13', correct: false },
           { text: '14', correct: false },
           { text: '15', correct: false },
           { text: '16', correct: true },

        ]
    },
    {
        question: 'Question 5?',
        answers: [
           { text: '17', correct: false },
           { text: '18', correct: true },
           { text: '19', correct: false },
           { text: '20', correct: false },

        ]
    }
]
