// .../80
// .../4
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)


// ********** Model **********
// .../7
// QuerySelectors
const solutionContainer = document.querySelector('solution-container');
const triesContainer = document.querySelector('tries-container');
const tryInputSection = document.querySelector('try-input-section');
const tryInputs = document.querySelector('try-input');
const trySubmitBtn = document.querySelector('try-submit-btn');
const messageContainer = document.querySelector('winner-message-container');
const winnerSubmitBtn = document.querySelector('winner-submit-btn');

// Save the code/solution of the game in this variable
// Hint: save your code in an array
let code = null;

// ********** View **********
// .../1
function hideCode() {
  solutionContainer.classList.add('hidden');
  // hide the code
  // have a look at the html to find out how
}

// .../1
function showCode() {
  solutionContainer.classList.remove('hidden');
  // show the code
  // have a look at the html to find out how
}

// .../4
function drawCode(codeArray) {
  for (var i = solutionContainer.length; i > 0; i--) {
    solutionContainer.pop();
  };
  


  // Draw the code  array into solution-container
  // Don't forget to empty the container first
}

// .../1
function emptyTriesContainer() {
 for (var i = triesContainer.length; i > 0; i--) {
    triesContainer.pop();
  }
  // empty the tries container
}

// .../6
function drawNewTry(tryArray, correctNumberCount, correctPlaceCount) {
  // append a new try to the triesContainer (check the html file)
  // don't forget the winner class if all numbers are correct
}

// .../3
function emptyTryInputs() {
  // empty the try input fields
}

// .../2
function showTryInput() {
  // show tryInputContainer
  // hide messageContainer
  // use dont-show class
}

// .../2
function showMessage() {
  // show tryInputContainer
  // hide messageContainer
  // use dont-show class
}

// ********** Update **********
// .../3
function randomNumber() {
  // this function returns a random number between 1 and 6
}

// .../4
function generateNewCode() {
  // this function generates and returns a new code (array of 4 random numbers)
}

// .../4
function validateTryInputs() {
  // validate all four try input field
  // make sure all numbers are between 1 and 6
  // return true or false
}

// .../6
function initGame() {
  // Reset game
}

// .../4
function generateTryArray() {
  // generate an array with the four values from the input fields
  // make sure they are inserted in the array as an int not a string
}

// .../10
function calculateCorrectNumberCount(codeArray, tryArray) {
  // Calculate the amount of correct numbers in the tryArray
  // A correct number does not have to be in the correct spot
}

// .../6
function calculateCorrectPlaceCount(codeArray, tryArray) {
  // Calculate the amount of numbers matching the code
  // The numbers have to be identical and in the same place
}

// ********** Events **********
window.addEventListener('load', function () {
  initGame();
});

// .../8
// on submit btn click
// check if the input are valid
// if the inputs are not valid do nothing
// if they are:
// generate the try array
// calculate the correct number count
// calculate the correct place count
// draw the try in html
// if the try is a winner show the winner btn
// and show the code
// of course you will need to use the correct update/view functions

// .../3
// on winner btn click
// init a new game
