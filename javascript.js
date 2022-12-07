// variables -  hide and show the div
let startContainer = document.getElementById('starter');
let btnOne = document.getElementById('startButton');
let btnTwo = document.getElementById('instructionButton');
let btnThree = document.getElementById('homepage')
let btnFour = document.getElementById('homepageTwo')
let instruction = document.getElementById('instructions');
let startGame = document.getElementById('gameContainer')

// functions to hide and show the divs
btnOne.addEventListener('click', () => {
    startContainer.style.display = 'none';
    startGame.style.display = 'block';
});

btnTwo.addEventListener('click', () => {
    startContainer.style.display = 'none';
    instruction.style.display = 'block';
});

btnThree.addEventListener('click', () => {
    startContainer.style.display = 'block';
    instruction.style.display = 'none';
});

btnFour.addEventListener('click', () => {
    startContainer.style.display = 'block';
    startGame.style.display = 'none';
});