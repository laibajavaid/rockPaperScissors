function getComputerChoice(word) {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
  }
 
console.log(getComputerChoice())