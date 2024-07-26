// console.log('hi');

  // 1. greet and invite input

const getUserChoice = userInput => {
  // 2. level the field with toLowerCase
  userInput = userInput.toLowerCase();
  // 3. sanity check
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || 'bomb!'){
  return userInput
  } else {
  console.log(` '${userInput}' is not valid  input.
  Please enter "rock", "paper" or "scissors".`)
  }
}

// 4. test call of getUserChoice function
// console.log(getUserChoice(''));
// console.log(getUserChoice('cock'));
// console.log(getUserChoice('rock'));
// console.log(getUserChoice('paper'));
// console.log(getUserChoice('scissors'));

// 5. generate computer choice

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  // test for computerChoice value
  // console.log(computerChoice);
  /*
  OK, it has to be 'floor' & '*3' else we only get values  0 and 1 ('floor' & '*2') or 1 and 2 ('ceil' & 2)
  */
  
  // Note: we don't need 'break' on the switch 'case's because we are 'return'ing
  switch (computerChoice) {
    case 0:
    return 'rock';

    case 1:
    return 'paper';

    case 2:
    return 'scissors';
  }
};
// 6. test call of computer choice
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

// 7.-10 compare choices
const determineWinner = (userChoice, 
computerChoice) => {
  // 14. Cheat code 'bomb!
  if (userChoice === 'bomb!') {
    return 'User sins!\n\n\tEvery time a coconut!'
  };
  // 7. drawn game condition
  if (userChoice === computerChoice) { 
   // console.log('you are here #1')
    return 'It\'s a draw!';  
  };
  // 8. userChoice = 'rock'
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'User wins!'
    };
  };
  // 9. userChoice = 'paper'
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'User wins!'
    };
  };
  // 10. userChoice = 'scissors'
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'User wins!'
    };
  };
};
// 11. test determine winner
/*
console.log('rock', 'rock', determineWinner('rock', 'rock'));

console.log('paper', 'paper', determineWinner('paper', 'paper'));

console.log('scissors', 'scissors', determineWinner('scissors',
 'scissors'));

console.log('rock', 'paper', determineWinner('rock', 'paper'));

console.log('rock', 'scissors', determineWinner('rock', 'scissors'));
console.log('paper', 'rock', determineWinner('paper', 'rock'));


console.log('paper', 'scissors', determineWinner('paper', 'scissors'));

console.log('scissors', 'rock', determineWinner('scissors', 'rock'));

console.log('scissors', 'paper', determineWinner('scissors', 'paper'));
*/
// 12. set up game loop
    // I'd have done this bit first T-D style
    // They've gone for B-U but that's OK
    // OK! So we haven't covered looping yet

const playGame = () => {
  const userChoice = getUserChoice('bOMb!');
  const computerChoice = getComputerChoice();
  console.log(`User choice is: ${userChoice}.\nComputer choice is: ${computerChoice}.`);
  // 13. Determine the winner
  console.log(determineWinner(userChoice, computerChoice));

};
playGame();
// 13. Test the whole thing

// 14. Flavours & Varieties

