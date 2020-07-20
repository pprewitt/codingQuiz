
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
const rightAnswerSound = new Audio("success-jingle.wav");
const wrongAnswerSound = new Audio("wrong-buzz.wav");




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
        wrongAnswerSound.play();
    } else {
        rightAnswerSound.play();
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

    //local storage function for scores
        var thisScore ={score: playerScore, initials: person};
        var highScore = JSON.parse(localStorage.getItem('highScore')) || [];
        
        highScore.push(thisScore);
        localStorage.setItem('highScore', JSON.stringify(highScore));
        
        
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
        question: 'An if / else statement condition is enclosed within ________.',
        answers: [
           { text: 'Quotation Marks' , correct: false },
           { text: 'Parentheses', correct: true },
           { text: 'Curly Brackets', correct: false },
           { text: 'Square Brackets', correct: false },

        ]
    },
    {
        question: 'Math.random() returns:',
        answers: [
           { text: 'A random number from 0 to 1', correct: true },
           { text: 'A random number from 1 to 10', correct: false },
           { text: 'A random number from -1 to 0', correct: false },
           { text: 'A random number/length', correct: false },

        ]
    },
    {
        question: 'Which HTML element contains the JavaScript??',
        answers: [
           { text: '<js>', correct: false },
           { text: '<scripting>', correct: false },
           { text: '<script>', correct: true },
           { text: '<javascript>', correct: false },

        ]
    },
    {
        question: 'JavaScript arrays can store ________.',
        answers: [
           { text: 'Numbers ', correct: false },
           { text: 'Strings', correct: false },
           { text: 'Other arrays', correct: false },
           { text: 'All of the above', correct: true },

        ]
    },
    {
        question: 'What operator means "equal value and equal type"?',
        answers: [
           { text: '=', correct: false },
           { text: '===', correct: true },
           { text: '!=', correct: false },
           { text: '=>', correct: false },

        ]
    }
]
