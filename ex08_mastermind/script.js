// .../80
// .../4
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)


// ********** Model **********
// .../7
// QuerySelectors
const solutionContainer = document.querySelector('#solution-container');
const triesContainer = document.querySelector('#tries-container');
const tryInputSection = document.querySelector('#try-input-section');
const tryInputs = document.querySelectorAll('#try-inputs');
const trySubmitBtn = document.querySelector('#try-submit-btn');
const messageContainer = document.querySelectorAll('#winner-message-container');
const winnerSubmitBtn = document.querySelectorAll('#winner-submit-btn');


// Save the code/solution of the game in this variable
// Hint: save your code in an array
let code = [Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)];

const codeArray = document.querySelectorAll('.solution-option');

// ********** View **********
// .../1

function hideCode() {
  // hide the code
  // have a look at the html to find out how
  solutionContainer.classList.add('hidden');
}

// .../1
function showCode() {
  // show the code
  // have a look at the html to find out how
  solutionContainer.classList.remove('hidden');

}


// .../4
function drawCode(codeArray) {
  // Draw the code array into solution-container
  // Don't forget to empty the container first
  // indexen v code overlopen => loopen (foreach evt)
  // code[] toevoegen aan solution-container of solution-option? (innerhtml, textContent, string, number?)

  codeArray.innerHtml = '';
  // solutionContainer.innerHtml = '';

  for (i = 0; i < codeArray.length; i++) {
    solutionContainer.innerHTML = codeArray[i];
  }
}


// .../1
function emptyTriesContainer() {
  // empty the tries container
  triesContainer.innerHTML = '';
}

// .../6
function drawNewTry(tryArray, correctNumberCount, correctPlaceCount) {
  // append a new try to the triesContainer (check the html file)
  // don't forget the winner class if all numbers are correct

  var newTry = document.createElement("div");
  triesContainer.appendChild(newTry);
  newTry.classList.add('try');
  return newDiv;

  var correctNumberCount =

  var correctPlaceCount =


  /*if(newTry ===

  )
*/

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
