// variables -  hide and show the div
let startContainer = document.getElementById('starter');
let btnOne = document.getElementById('startButton');
let btnTwo = document.getElementById('instructionButton');
let btnThree = document.getElementById('homepage')
let btnFour = document.getElementById('homepageTwo')
let instruction = document.getElementById('instructions');
let startGame = document.getElementById('gameContainer')

// variables for human selections 
const humanRock = document.querySelector("#humanRock");
const humanPaper = document.querySelector("#humanPaper");
const humanScissors = document.querySelector("#humanScissors");

// variables for computer selections 
const computerRock = document.querySelector("#computerRock");
const computerPaper = document.querySelector("#computerPaper");
const computerScissors = document.querySelector("#computerScissors");

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

// variables for the game functionality 
let humanScore = 0;
let computerScore = 0;

// event listener for clicking either rock, paper or scissors
document.addEventListener('click', choiceSelected);

function choiceSelected(event) {
    let elementSelected = event.target; // return the element triggered at the time of the event 

    // show in the console
    console.log(event.target);

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    // user selections
    if (elementSelected.classList.contains("hSelection") && elementSelected.id === ("rockPic")) {
        console.log("You Have Selected Rock");
        startRound(rock);
    } else if (elementSelected.classList.contains("hSelection") && elementSelected.id === ("paperPic")) {
        console.log("You Have Selected Paper");
        startRound(paper);
    } else if (elementSelected.classList.contains("hSelection") && elementSelected.id === ("scissorsPic")) {
        console.log("You Have Selected Scissors");
        startRound(scissors);
    }
}

// function to generate the computers select
function computerChoiceSelected() {
    randomValue = Math.floor(Math.random() * 3);

    if (randomValue == "0") {
        return "Rock";
    } else if (randomValue == "1") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// function to play the game 
function startRound(humanSelection) {
    const computerChoice = computerChoiceSelected();
    console.log("The Computer Selected", computerChoice);
    // covert computers selection to lowercase 
    let lowerCaseComputer = computerChoice.toLowerCase();

    // loop through computers options and change the colour of the selection accordingly
    if (lowerCaseComputer == "rock") {
        // change the colour of the di
        removeEffectComputer();
        computerRock.classList.add('computerPick');
    } else if (lowerCaseComputer == "paper") {
        // change the colour of the div
        removeEffectComputer();
        computerPaper.classList.add('computerPick');
    } else if (lowerCaseComputer == "scissors") {
        // change the colour of the div
        removeEffectComputer();
        computerScissors.classList.add('computerPick');
    }

    // convert the player selection into a sstring 
    let stringSelection = String(humanSelection);
    // convert to lower case
    let lowerCaseSelection = stringSelection.toLowerCase();

    // if the player selection was rock
    if (lowerCaseSelection === "rock") {
        // change the effects of the div 
        humanRock.classList.add('humanPick');
        // if the computer selection is rock
        if (lowerCaseComputer === "rock") {
            console.log("It Was A Draw");
            humanScore++;
            computerScore++;
            // set player scores
            const currentHumanScore = document.querySelector("#humanScore").innerHTML = `Score: ${humanScore}`;
            const currentComputerScore = document.querySelector("#computerScore").innerHTML = `Score: ${computerScore}`;
            scoreKeeper(humanScore, computerScore);
        }

        // if the computer selection is paper
        else if (lowerCaseComputer === "paper") {
            console.log("You Lose - Paper Beats Rock");
            computerScore++;
            // set player scores
            const currentComputerScore = document.querySelector("#computerScore").innerHTML = `Score: ${computerScore}`;
            scoreKeeper(humanScore, computerScore);
        }

        // if the computer selection is scissors
        else {
            console.log("You Win - Rock Beats Scissors");
            humanScore++;
            // set player scores
            const currentHumanScore = document.querySelector("#humanScore").innerHTML = `Score: ${humanScore}`;
            scoreKeeper(humanScore, computerScore);
        }
    }

    // player selection was paper
    else if (lowerCaseSelection === "paper") {
        // change the effects of the div 
        humanPaper.classList.add('humanPick');
        // if the computer selection is rock
        if (lowerCaseComputer === "rock") {
            console.log("You Win - Paper Beats Rock");
            humanScore++;
            // set player scores
            const currentHumanScore = document.querySelector("#humanScore").innerHTML = `Score: ${humanScore}`;
            scoreKeeper(humanScore, computerScore);
        }

        // if the computer selection is paper
        else if (lowerCaseComputer === "paper") {
            console.log("It Was a Draw");
            humanScore++;
            computerScore++;
            // set player scores
            const currentHumanScore = document.querySelector("#humanScore").innerHTML = `Score: ${humanScore}`;
            const currentComputerScore = document.querySelector("#computerScore").innerHTML = `Score: ${computerScore}`;
            scoreKeeper(humanScore, computerScore);
        }

        // if the computer selection is scissors
        else {
            console.log("You Lose - Scissors Beats Paper");
            computerScore++;
            // set player scores
            const currentComputerScore = document.querySelector("#computerScore").innerHTML = `Score: ${computerScore}`;
            scoreKeeper(humanScore, computerScore);
        }
    }

    // player selection was scissors
    else {
        // change the effects of the div 
        humanScissors.classList.add('humanPick');
        // if the computer selection is rock
        if (lowerCaseComputer === "rock") {
            console.log("You Lose - Rock Beats Scissors");
            computerScore++;
            // set player scores
            const currentComputerScore = document.querySelector("#computerScore").innerHTML = `Score: ${computerScore}`;
            scoreKeeper(humanScore, computerScore);
        }

        // if the computer selection is paper
        else if (lowerCaseComputer === "paper") {
            console.log("You Win - Scissors Beats Paper");
            humanScore++;
            // set player scores
            const currentHumanScore = document.querySelector("#humanScore").innerHTML = `Score: ${humanScore}`;
            scoreKeeper(humanScore, computerScore);
        }

        // if the computer selection is scissors
        else {
            console.log("It Was A Draw");
            humanScore++;
            computerScore++;
            // set player scores
            const currentHumanScore = document.querySelector("#humanScore").innerHTML = `Score: ${humanScore}`;
            const currentComputerScore = document.querySelector("#computerScore").innerHTML = `Score: ${computerScore}`;
            scoreKeeper(humanScore, computerScore);
        }
    }
}

function hideAndShow() {
    let endingPage = document.querySelector('.lastPage');
    endingPage.style.display = 'block';
    startGame.style.display = 'none';
}

function scoreKeeper(humanScore, computerScore) {
    // set variables  
    let humanLogo = document.getElementById('humanWins');
    let computerLogo = document.getElementById('computerWins');
    let humanWinner = document.getElementById('humanWinner');
    let computerWinner = document.getElementById('computerWinner');
    let drawWin = document.getElementById('drawWin');

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            hideAndShow();
            humanWinner.style.display = 'block';
            humanLogo.style.display = 'block';
            const humann = document.querySelector("#humanWinner").innerHTML = `You Win ${humanScore}:${computerScore}!`;
        } else if (computerScore > humanScore) {
            hideAndShow();
            computerLogo.style.display = 'block';
            computerWinner.style.display = 'block';
            const computerr = document.querySelector("#computerWinner").innerHTML = `Computer Wins ${computerScore}:${humanScore}!`;
        } else {
            hideAndShow();
            computerLogo.style.display = 'block';
            humanLogo.style.display = 'block';
            drawWin.style.display = 'block';
            const draww = document.querySelector("#drawWin").innerHTML = `Its a Draw ${computerScore}:${humanScore}!`;
        }
    }
}

// function to remove the hover and colour effects from the human 
function removeEffectHumaan() {
    humanRock.classList.remove('humanPick');
    humanPaper.classList.remove('humanPick');
    humanScissors.classList.remove('humanPick');
}

// function to remove the hover and colour effects from the computer 
function removeEffectComputer() {
    computerRock.classList.remove('computerPick');
    computerPaper.classList.remove('computerPick');
    computerScissors.classList.remove('computerPick');
}

// remove human player effect
humanRock.addEventListener('transitionend', removeEffectHumaan);
humanPaper.addEventListener('transitionend', removeEffectHumaan);
humanScissors.addEventListener('transitionend', removeEffectHumaan);

// remove computers effect
computerRock.addEventListener('transitionend', removeEffectComputer);
computerPaper.addEventListener('transitionend', removeEffectComputer);
computerScissors.addEventListener('transitionend', removeEffectComputer);