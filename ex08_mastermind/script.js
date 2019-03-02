// .../80
// .../4
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)

/*
* - validation message
* */

// ********** Model **********
// .../7
// QuerySelectors
const solutionContainer = document.querySelector('#solution-container');
const triesContainer = document.querySelector('#tries-container');
const tryInputSection = document.querySelector('#try-input-section');
const tryInputContainer = document.querySelector('#try-input-container');
const dummyTry = document.querySelector('#dummy-try');
const tryInputs = document.querySelectorAll('.try-input');
const trySubmitBtn = document.querySelector('#try-submit-btn');
const messageContainer = document.querySelector('#winner-message-container');
const winnerContainer = document.querySelector('.winner');
const winnerSubmitBtn = document.querySelector('#winner-submit-btn');
const solutionOptions = document.querySelectorAll('.solution-option');

// Save the code/solution of the game in this variable
// Hint: save your code in an array
let code;

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
  // Why should I empty the container when I populate it with new values directly?

  codeArray.forEach((number, index) => {
    solutionOptions[index].innerHTML = number;
  });

  // Draw the code  array into solution-container
  // Don't forget to empty the container first
}

// .../1
function emptyTriesContainer() {
 for (let i = triesContainer.length; i > 0; i--) {
    triesContainer.pop();
  }
  // empty the tries container
}

// .../6
function drawNewTry(tryArray, correctNumberCount, correctPlaceCount) {
  // append a new try to the triesContainer (check the html file)

  const clone = dummyTry.cloneNode(true);

  const children = clone.querySelectorAll('.try-option');
  tryArray.forEach((number, index) => {
    children[index].innerHTML = number;
  });

  clone.classList.remove('dont-show');
  clone.querySelector('.correct-place').innerHTML = correctPlaceCount;
  clone.querySelector('.correct-color').innerHTML = correctNumberCount;

  triesContainer.appendChild(clone);

  // don't forget the winner class if all numbers are correct
  if (correctNumberCount === children.length)
    winnerContainer.classList.remove('dont-show');
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

  tryInputSection.classList.remove('dont-show');
  messageContainer.classList.add('dont-show');
}

// .../2
function showMessage() {
  // hide tryInputContainer
  // show messageContainer
  // use dont-show class

  tryInputSection.classList.add('dont-show');
  messageContainer.classList.remove('dont-show');
}

// ********** Update **********
// .../3
function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
  // this function returns a random number between 1 and 6
}

// .../4
function generateNewCode() {
  return Array(4).fill(0,0,4).map(() => randomNumber());
  // this function generates and returns a new code (array of 4 random numbers)
}

// .../4
function validateTryInputs() {
  // validate all four try input field
  // make sure all numbers are between 1 and 6
  // return true or false

  let wrong = false;

  tryInputs.forEach((input) => {
    if (!input.checkValidity())
      wrong = true;
  });

  return wrong;
}

// .../6
function initGame() {
  // Reset game

  // Remove all entries

  code = generateNewCode();

  drawCode(code);

  showTryInput();
}

// .../4
function generateTryArray() {
  // generate an array with the four values from the input fields
  // make sure they are inserted in the array as an int not a string

  const array = [];
  tryInputs.forEach(element => array.push(Number(element.value)));
  return array;
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

  let correctPlaceCount = 0;

  codeArray.forEach((number, index) => {
    if (number === tryArray[index])
      correctPlaceCount += 1;
  });

  return correctPlaceCount;
}

// ********** Events **********
window.addEventListener('load', function () {
  initGame();
});

trySubmitBtn.addEventListener('click', () => {
  const tryArray = generateTryArray();

  emptyTryInputs();

  validateTryInputs();
  const correctNumberCount = calculateCorrectNumberCount(code, tryArray);
  const correctPlaceCount = calculateCorrectPlaceCount(code, tryArray);
  drawNewTry(tryArray, correctNumberCount, correctPlaceCount);
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