let startContainer = document.getElementById('starter');
let btnOne = document.getElementById('startButton');
let btnTwo = document.getElementById('instructionButton');
let btnThree = document.getElementById('homepage')
let instruction = document.getElementById('instructions');

btnOne.addEventListener('click', () => {
    startContainer.style.display = 'none';
});

btnTwo.addEventListener('click', () => {
    startContainer.style.display = 'none';
    instruction.style.display = 'block';
});

btnThree.addEventListener('click', () => {
    startContainer.style.display = 'block';
    instruction.style.display = 'none';
});
