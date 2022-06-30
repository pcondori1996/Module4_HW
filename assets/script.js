//alert('Enjoy the game and please grade nicely :)');
//localStorage.clear();
//Getting elements from HTMl page
var secsRemaining = document.querySelector('#secsLeft');
var correctScore = document.querySelector('#correctScore');
var startButton = document.querySelector('#startButton');
var queAndOpts = document.querySelector('.queAndOpts');
var instructions = document.querySelector('.instructions');
var questionHolder = document.querySelector('.questionHolder');
var correctScore = document.querySelector('#correctScore');
var postQuiz = document.querySelector('.postQuiz');
var headerElements = document.querySelector('.headerElements');
var headerPostElements = document.querySelector('.headerPostElements');


// GET THE LENGHT OF ANSWERS ARRAY
//console.log(Object.keys(quesAndAnswerLists));


//Button Selectors
var questionH4 = document.querySelector('#question');
var option1 = document.querySelector('.option1');
var option2 = document.querySelector('.option2');
var option3 = document.querySelector('.option3');
var option4 = document.querySelector('.option4');

//gobla carables
var index = 0;
var secCount = 1;
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

// Vars made after objects were made.
var lengthOfArray = quesAndAnswerLists.answers.length;


//Event listener for the Start Button
startButton.addEventListener("click", function () {
    questionHolder.classList.remove('hideElement');
    queAndOpts.classList.remove('hideElement');
    instructions.classList.add('hideElement');

    //Display all questions and options at index 0
    displayQuesAndOpts();



    var quizTimerInterval = setInterval(function () {
        secCount--;
        secsRemaining.textContent = secCount;

        if (secCount <= 0) {
            clearInterval(quizTimerInterval);
            secCount = 0;
            secsRemaining.textContent = secCount;
            questionHolder.classList.add('hideElement');
            queAndOpts.classList.add('hideElement');
            postQuiz.classList.remove('hideElement');
            headerElements.classList.add('hideElement');
            headerPostElements.classList.remove('hideElement');
            //secsRemaining.classList.add('hideElement');
            //correctScore.classList.add('hideElement');
        }
    }, 1000);

});


//Event Listener put in place on div holding all the buttons
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

//Function to display question and options
var displayQuesAndOpts = function () {

    // IF condition set in place so when questions run out.
    if (index == lengthOfArray) {
        questionHolder.classList.add('hideElement');
        queAndOpts.classList.add('hideElement');
        postQuiz.classList.remove('hideElement');
        headerElements.classList.add('hideElement');
        headerPostElements.classList.remove('hideElement');
        secCount = 0;
        secsRemaining.textContent = secCount;
    };

    questionH4.textContent = quesAndAnswerLists.questions[index];
    option1.textContent = quesAndAnswerLists.button1Ops[index];
    option2.textContent = quesAndAnswerLists.button2Ops[index];
    option3.textContent = quesAndAnswerLists.button3Ops[index];
    option4.textContent = quesAndAnswerLists.button4Ops[index];
};


// -------After Quiz Section (Local Storage of Score and Username--------------

var typeName = document.querySelector('#textPlace');
var enterButton = document.querySelector('#insertName');


enterButton.addEventListener("click", function (event) {
    event.preventDefault();


    var StoredDate = {
        Usernames: typeName.value,
        FinalScores: scoreCount
    };

    var getData1 = GetData(StoredDate);
    getData1.sort(compareData);

    if(getData1.length > 10) { 
        getData1.pop();
    }
    ConnectData(getData1);
    //setter
    localStorage.setItem('StoredPastName', JSON.stringify(getData1));


});

var GetData = function (StoredDate) {
    var StoredNames = JSON.parse(localStorage.getItem("StoredPastName"));

    if (StoredNames === null) {
        StoredNames = [StoredDate];
    } else {
        StoredNames.push(StoredDate);
    }
    return StoredNames
}

function compareData(a, b) {
    //simple logic to sort the values in the highscores array by their score
    const scoreA = a.FinalScores;
    const scoreB = b.FinalScores;

    var comparison = 0;
    if (scoreA < scoreB) {
        comparison = 1;
    } else if (scoreA > scoreB) {
        comparison = -1
    }
    return comparison;
}

var OLofData = document.querySelector(".OLofData");

var ConnectData = function(getData1) {
    for(i=0 ; i < getData1.length; i++) {
        var listItem = document.createElement('il')
        listItem.textContent = getData1[i].Usernames + " Score: " + getData1[i].FinalScores;
        OLofData.appendChild(listItem);
    }
}

