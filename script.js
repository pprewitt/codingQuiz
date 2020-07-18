var startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerBtns = document.getElementById('answer-buttons');
startButton.addEventListener('click', startGame)
var gameTimer;
var gameLength = 80;
var highScore = 0;
var playerScore = gameLength;
var questionIndex = 0;

function startGame(){

    startButton.classList.add('hide')
    console.log('started');
    questionContainer.classList.remove('hide');
    showQuestion();
};

function nextQuestion(){
    
    questions[questionIndex++];
    showQuestion();


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
    if (questionIndex<questions.length){
        setTimeout(nextQuestion, 750);
    };
    
};
function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');
        
    } else {
        element.classList.add('wrong');
        
        
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
function wrongAnswer(){

};
function correctAnswer(){

};
function timerDeduct(){

};
function startTimer(){

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
           { text: '5', correct: false },
           { text: '6', correct: true },
           { text: '7', correct: false },
           { text: '8', correct: false },

        ]
    },
    {
        question: 'Question 3?',
        answers: [
           { text: '9', correct: false },
           { text: '10', correct: true },
           { text: '11', correct: false },
           { text: '12', correct: false },

        ]
    },
    {
        question: 'Question 4?',
        answers: [
           { text: '13', correct: false },
           { text: '14', correct: true },
           { text: '15', correct: false },
           { text: '16', correct: false },

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
    },
]
