let randomNumer = parseInt(Math.random()*100+1)
let submit = document.querySelector('#subt')
let userInput = document.querySelector('.guessField')
let guessSlot = document.querySelector('.Guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHigh = document.querySelector('.lowOrHigh')
let startOver = document.querySelector('.resultParas')
let p = document.createElement('p')

let prevguess = []
let numGuess  = 1

let playGame = true
if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess){
if (isNaN(guess)) {
    alert('please enter a correct number')
}
else if (guess<1) {
    alert('please enter a number more than 1')
}
else if (guess>100) {
    alert('please enter a number less than or equal to 100')
}
else{
    prevguess.push(guess)
    if (numGuess === 11) {
        displayMessage(`Game Over. Random Number was: ${randomNumer}`)
      endGame();
    }
else{
    displayGuess(guess);
    checkguess(guess);

}
}
}
function checkguess(guess){
    if (guess === randomNumer) {
        displayMessage('You guessed it right. you won')
        endGame()
    }
    else if (guess<randomNumer) {
        displayMessage('Number is tooo low')
    }
    else if(guess>randomNumer){
        displayMessage('Number is tooo high')
    }

}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    remaining.innerHTML= `${11-numGuess}`
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function  endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumer = parseInt(Math.random()*100+1)
        prevguess = []
        numGuess =1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);

        playGame = true;
    })
}
