//alert('Enjoy the game and please grade nicely :)');

//Getting elements from HTMl page
var secsRemaining = document.querySelector('#secsLeft');
var correctScore = document.querySelector('#correctScore');
var startButton = document.querySelector('#startButton');

var secCount = 30;

//Applying CSS to properties
correctScore.setAttribute('style', 'background-color: black');
secsRemaining.setAttribute('style', 'background-color: black');

// The start button is pressed

    //quizTimerInterval.preventDefault();
    //clearInterval(quizTimerInterval);

startButton.addEventListener("click", function() {
    var quizTimerInterval = setInterval(function() {
        secCount--;
        secsRemaining.textContent = secCount;
    
        if(secCount === 0) {
        clearInterval(quizTimerInterval);
        }
    }, 1000);
   
});

