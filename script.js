var startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container');
startButton.addEventListener('click', startGame)

function startGame(){
    startButton.classList.add('hide')
    console.log('started');
    questionContainer.classList.remove('hide');
    nextQuestion();
}
function nextQuestion(){

}
function selectAnswer(){

}
var questions = [
    {
        question: 'Which of these cannot be a variable?',
        answers: [
           { text: '', correct: false },
           { text: '', correct: true },
           { text: '', correct: false },
           { text: '', correct: false },

        ]
    }
]
