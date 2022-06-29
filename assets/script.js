//alert('Enjoy the game and please grade nicely :)');

//Getting elements from HTMl page
var secsRemaining = document.querySelector('#secsLeft');
var correctScore = document.querySelector('#correctScore');
var startButton = document.querySelector('#startButton');
var queAndOpts = document.querySelector('.queAndOpts');
var instructions = document.querySelector('.instructions');
var questionHolder = document.querySelector('.questionHolder');
var correctScore = document.querySelector('#correctScore');
var postQuiz = document.querySelector('.postQuiz');


// GET THE LENGHT OF ANSWERS ARRAY
console.log(Object.keys(quesAndAnswerLists));

//Button Selectors
var questionH4 = document.querySelector('#question');
var option1 = document.querySelector('.option1');
var option2 = document.querySelector('.option2');
var option3 = document.querySelector('.option3');
var option4 = document.querySelector('.option4');

//gobla carables
var index = 0;
var secCount = 30;
var scoreCount = 0;

//Applying CSS to properties
correctScore.setAttribute('style', 'background-color: black');
secsRemaining.setAttribute('style', 'background-color: black');

// The start button is pressed

//quizTimerInterval.preventDefault();
//clearInterval(quizTimerInterval);

//Obeject that holds array of the question and answer options for every button
var quesAndAnswerLists = {
    questions: ['Eu sinto sua falta!', 'Todavia no se como escribir JavaScript!', 
    'Ik mis je', 'Comment vas-tu?', 'I still dont understand JavaScript!'],
    button1Ops: ['Portuguese', 'English', 'Italian', 'French', 'English'],
    button2Ops: ['English', 'French', 'Dutch', 'German', 'French'],
    button3Ops: ['Spanish', 'Spanish', 'Spanish', 'Italian', 'Portuguese'],
    button4Ops: ['French', 'Italian', 'English', 'Dutch', 'Spanish'],
    answers: ['Portuguese', 'Spanish', 'Dutch', 'French', 'English']
}
//First 
startButton.addEventListener("click", function () {
    questionHolder.classList.remove('hideElement');
    queAndOpts.classList.remove('hideElement');
    instructions.classList.add('hideElement');

    displayQuesAndOpts();



    var quizTimerInterval = setInterval(function () {
        secCount--;
        secsRemaining.textContent = secCount;

        if (secCount <= 0) {
            clearInterval(quizTimerInterval);
            questionHolder.classList.add('hideElement');
            queAndOpts.classList.add('hideElement');
            postQuiz.classList.remove('hideElement');
        }
    }, 1000);

});

queAndOpts.addEventListener('click', function (event) {
    if (event.target.matches('.buttons')) {
        if (quesAndAnswerLists.answers[index] === event.target.textContent) {
            alert('correct');
            scoreCount++;
            correctScore.textContent = scoreCount;

        } else {
            alert('incorrect');
            secCount = secCount - 5;
        }
    }
    index++;
    displayQuesAndOpts();
})

var displayQuesAndOpts = function () {
   // if (index ==) {}
    questionH4.textContent = quesAndAnswerLists.questions[index];
    option1.textContent = quesAndAnswerLists.button1Ops[index];
    option2.textContent = quesAndAnswerLists.button2Ops[index];
    option3.textContent = quesAndAnswerLists.button3Ops[index];
    option4.textContent = quesAndAnswerLists.button4Ops[index];
};
