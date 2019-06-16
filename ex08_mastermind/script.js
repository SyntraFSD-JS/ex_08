// .../80
// 2/4
// ten points for:
// pushing regularly (every 30 minutes)
// clean code (indentation)


// ********** Model **********
// 7/7
// QuerySelectors
const solutionContainer = document.querySelector('#solution-container');
const triesContainer = document.querySelector('#tries-container');
const tryInputSection = document.querySelector('#try-input-section');
const tryInputs = document.querySelectorAll('.try-input');
const trySubmitBtn = document.querySelector('#try-submit-btn');
const messageContainer = document.querySelector('#winner-message-container');
const winnerSubmitBtn = document.querySelector('#winner-submit-btn');

// Save the code/solution of the game in this variable
// Hint: save your code in an array
let code = null;


// ********** View **********
// 0,5/1
function hideCode() {
  // hide the code
  // have a look at the html to find out how
  solutionContainer.classList.add('hidden');
}

//0,5/1
function showCode() {
  // show the code
  // have a look at the html to find out how
  solutionContainer.classList.remove('hidden');
}

// 2/4
function drawCode(codeArray) {
  // Draw the code  array into solution-container
  // Don't forget to empty the container first
  for ( var i = 0; i< solutionContainer.children.length; i++){
    //console.log(codeArray[i]);
    solutionContainer.children[i].textContent = '';
}
  for ( var i = 0; i< solutionContainer.children.length; i++){
      //console.log(codeArray[i]);
      solutionContainer.children[i].textContent = codeArray[i];
  }
}

// 1/1
function emptyTriesContainer() {
  // bij nieuw spel... ttz bij "Nieuw Spel"-button of bij onLoad Window
  // empty the tries container
  while (triesContainer.hasChildNodes()) {
    triesContainer.removeChild(triesContainer.lastChild);
  }
  //alternatief:
  // triesContainer.innerHTML = ''
}

// 3/6
function drawNewTry(tryArray, correctNumberCount, correctPlaceCount) {
  // append a new try to the triesContainer (check the html file)
  // don't forget the winner class if all numbers are correct
  /*
  console.log(winnerTemplate.firstElementChild.querySelectorAll('.try-option'));
  console.log(newTryTemplate.querySelector('.correct-color').innerHTML);
  console.log(newTryTemplate.querySelector('.correct-place').innerHTML);
  */
  const newTryTemplate = (document.querySelectorAll('.try'))[0];
  let myTryOptions = newTryTemplate.firstElementChild.querySelectorAll('.try-option');
  for (let i=0 ; i< myTryOptions.length ; i++){
    // console.log(myTryOptions[i]);
    myTryOptions[i].innerHTML = tryArray[i];
  }
  newTryTemplate.querySelector('.correct-color').innerHTML = correctNumberCount;
  newTryTemplate.querySelector('.correct-place').innerHTML = correctPlaceCount;

  // Nieuwe newTryTemplate-blok toevoegen als nieuwe TRY
  let myHTML = triesContainer.innerHTML;
  let isWinner = '';
  if (correctPlaceCount === 4) {
    isWinner = "winner";
    showCode();
    winnerSubmitBtn.classList.remove('dont-show')
  }
  myHTML += "<div class=\"try " + isWinner + "\">" + newTryTemplate.innerHTML + "</div>";
  //console.log(myHTML);

  triesContainer.innerHTML = myHTML;

}


// 3/3
function emptyTryInputs() {
  // empty the try input fields
  while (tryInputs.hasChildNodes()) {
    tryInputs.children.value = '';
  }
}

// 1,5/2
function showTryInput() {
  // show tryInputContainer
  // hide messageContainer
  // use dont-show class
  tryInputSection.classList.remove('dont-show');
  messageContainer.classList.add('dont-show');
}

// 1/2
function showMessage() {
  // show tryInputContainer
  // hide messageContainer
  // use dont-show class
  messageContainer.classList.remove('dont-show');
}

// ********** Update **********
// 3/3
function randomNumber() {
  // this function returns a random number between 1 and 6
  return Math.floor(Math.random() * 6) + 1;
}

// 3/4
function generateNewCode() {
  // this function generates and returns a new code (array of 4 random numbers)
  code= new Array();
  for (let i=0; i<4; i++) {
    code.push(randomNumber());
  }
  return code;
}


// 4/4
function validateTryInputs(codeArray) {
  // validate all four try input field
  // make sure all numbers are between 1 and 6
  // return true or false

  for (let i=0; i<tryInputs.length; i++) {
    let myCheck = tryInputs[i].value;
    if ( myCheck <1 || myCheck >6 ) {
      return false
    } else {
      // do nothing
      // console.log(myCheck);
    }
  }
  // Enkel TRUE returnen als geen enkele input FALSE checkt
  return true

}

// 4/6
function initGame() {
  // Reset game
  generateNewCode();
  drawCode(code);
  hideCode();
  emptyTriesContainer();
  showTryInput();
}

//4/4
function generateTryArray() {
  // generate an array with the four values from the input fields
  // make sure they are inserted in the array as an int not a string
  let myTryArray = new Array();
  for ( let i = 0; i < tryInputs.length; i++) {
    myTryArray.push( parseInt( tryInputs[i].value ) );
  }
  return myTryArray;
}

// 4/10
function calculateCorrectNumberCount(codeArray, tryArray) {
  // Calculate the amount of correct numbers in the tryArray
  // A correct number does not have to be in the correct spot
  let match = 0;
  let myTempCodeArray = [...codeArray];
  //console.log("code = " + code);
  //console.log("codeArray = " + myTempCodeArray);
  //console.log("myTempCodeArray = " + myTempCodeArray);

  for ( let i = 0; i < tryArray.length; i++) {
    let mySplicedArray = myTempCodeArray
    for ( let j = 0; j < mySplicedArray.length; j++){
       if (tryArray[i] === mySplicedArray[j]) {
        match++;
        // de juiste uit myTempCodeArray kieperen
        myTempCodeArray.splice(j,1);
        }
    }
  }
  return match;
}

// 5/6
function calculateCorrectPlaceCount(codeArray, tryArray) {
  // Calculate the amount of numbers matching the code
  // The numbers have to be identical and in the same place
  let match = 0;
  //let myCode = codeArray;
  //let myTry  = tryArray;
  //let numIdentical = false;

  for ( let i = 0; i < tryArray.length; i++) {
    if (tryArray[i] === codeArray[i]) {
      //numIdentical[i] = true;
      match++;
    }
  }
  return match;
}

// ********** Events **********
window.addEventListener('load', function () {
  initGame();
});

// 6/8
// on submit btn click
// check if the input are valid
// if the inputs are not valid do nothing
// if they are:
// generate the try array
// calculate the correct number count
// calculate the correct place count
trySubmitBtn.addEventListener('click',function(){
  if ( validateTryInputs(code) ) {
    // generate the try array
    let myTryArray = generateTryArray();
    //console.log(myTryArray);

    // draw the try in html// if the try is a winner show the winner btn
    // and show the code
    // of course you will need to use the correct update/view functions
    drawNewTry(
        myTryArray,
        calculateCorrectNumberCount(code, myTryArray),
        calculateCorrectPlaceCount(code, myTryArray)
        )

  } else {
    // do nothing ?
  }

});

// 3/3
// on winner btn click
// init a new game
winnerSubmitBtn.addEventListener('click', function() {
  initGame();
});
