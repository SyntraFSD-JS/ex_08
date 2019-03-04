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
const tryInputs = document.querySelectorAll('#try-input');
const trySubmitBtn = document.querySelector('#try-submit-btn');
const messageContainer = document.querySelector('#winner-message-container');
const winnerSubmitBtn = document.querySelector('#winner-submit-btn');
const solutionOption = document.querySelectorAll('.solution-option');

let code = [];
let codeArray = [];


// ********** View **********

function hideCode() {
  solutionContainer.classList.add('hidden');
}

function showCode() {
  solutionContainer.classList.remove('hidden');
}

// .../4
function drawCode(codeArray) {
  // Draw the code array into solution-container
  // Don't forget to empty the container first

  solutionContainer.innerHtml = '';


  for (i = 0; i < solutionOption.length; i++) {
    codeArray.push(solutionOption[i]);
  }
  }

// .../1
function emptyTriesContainer() {
  triesContainer.innerHTML = '';
}

// .../6
function drawNewTry(tryArray, correctNumberCount, correctPlaceCount) {
  // append a new try to the triesContainer (check the html file)
  // don't forget the winner class if all numbers are correct

  var tryArray = document.getElementsByClassName('try');
  var cloneTryArray = tryArray.cloneNode(true);
  triesContainer.appendChild(cloneTryArray);

  cloneTryArray.classList.remove('dont-show');

  //geen enkel idee wat er met andere parameters functie moet gebeuren
  //of waarvoor ze dienen
  //wat doet deze functie eigenlijk?

// .../3
function emptyTryInputs() {
  for (i = 0; i < 4; i++) {
    tryInputs[i].innerHtml = "";
  }
}

// .../2
function showTryInput() {
  // show tryInputContainer
  // hide messageContainer

  tryInputSection.classList.remove("dont-show");
  messageContainer.classList.add("dont-show");
}

// .../2
function showMessage() {
  // show tryInputContainer // huh? zal omgekeerd moeten zijn neem ik aan
  // hide messageContainer // idem
  // use dont-show class

  tryInputSection.classList.add("dont-show");
  messageContainer.classlist.remove("dont-show");
}

// ********** Update **********
// .../3
function randomNumber() {
  return Math.floor(Math.random() * (6)) + 1;
}

// .../4
function generateNewCode() {
  // this function generates and returns a new code (array of 4 random numbers)
  for (let i=0; i<code.length; i++){
    var newCode = solutionContainer.push(code[i]);
  }
  return solutionContainer;
}

// .../4
/*function validateTryInputs() {
  // validate all four try input field
  // make sure all numbers are between 1 and 6
  // return true or false
  for (i=0; i< tryInputs.length; i++) {
    if(tryInputs.length < 4)
      alert("invalid input : please input 4 numbers");
    ||
    if (tryInputs < 1 && tryInputs > 6)
      alert ("invalid input: input number must be greater than 0 and smaller than 6)";
}
}*/
// .../6
function initGame() {
  // Reset game

  hideCode();
  drawCode();
  emptyTryInputs();
  // randomNumber();
  generateNewCode();
  showTryInput();

}

// .../4
function generateTryArray() {
  // generate an array with the four values from the input fields
  // make sure they are inserted in the array as an int not a string

  for(i=0; i<tryInputs.length; i++) {
    var tryArray = tryArray.push(tryInputs[i]);
  }
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
