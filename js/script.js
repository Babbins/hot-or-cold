/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    guessArray,
    winningNumber,
    guessCount;

initialize();

function initialize(){
  winningNumber = generateWinningNumber();
  guessArray = [];
  guessCount = 5;
}


/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random()*99);
}

// Fetch the Players Guess

function playersGuessSubmission(){
  playersGuess = +$('#input').val();
  $('#input').val("");
  checkGuess(playersGuess);
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(playersGuess){
  return playersGuess - winningNumber;
}

function guessMessage(playersGuess){
  var difference = lowerOrHigher(playersGuess);
  var distance = Math.abs(difference);
  var msg1, msg2;
  if(difference < 0 ){
    msg1 = " Guess Higher.";
  }
  else{
    msg1 = " Guess Lower.";
  }
  if (distance > 50){
    msg2 = "You are FROZEN SOLID...";
    uiChange('frozen');
  }
  else if (distance > 20){
    msg2 = "You are COLD...";
    uiChange('cold');
  }
  else if(distance > 15){
    msg2 = "You are WARM.";
    uiChange('warm');
  }
  else if(distance > 5){
    msg2 = "You are HOT!";
    uiChange('hot');
  }
  else {
    msg2 = "You are ON FIRE!!!";
    uiChange('fire');
  }
  return msg2 + msg1;
}
// Check if the Player's Guess is the winning number

function checkGuess(playersGuess){
  if(guessCount > 0){
    if(guessArray.indexOf(playersGuess) >= 0){
      $('.response').remove();
      $('#div-form').after('<p class=" response text-center"> You already tried that number! </p>');
      return;
    }
    if(playersGuess > 99 || playersGuess < 1){
      $('.response').remove();
      $('#div-form').after('<p class=" response text-center"> Invalid guess. </p>');
      return;
    }

    guessCount--;
    guessArray.push(playersGuess);
    if(playersGuess == winningNumber){
      uiChange('win');
      $('#div-form').before('<p class="response text-center"> <span id="win">You Win! </span> The Winning Number is: '+winningNumber+'  </p>');
    }
    else {
      $('.response').remove();
      $('.guesses').remove();
      $('#div-form').after('<div class="row guesses"><p class="col-xs-12 text-center"> Guesses Made: '+ guessArray +' </p></div>');
      $('#div-form').after('<div class="row response"><p class="col-xs-12 text-center"> '+guessMessage(playersGuess)+'</p></div>').slideDown();
      $('#button-row').after('<p class="text-center guesses"> Guesses remaining: '+ guessCount+' </p>');
      if(guessCount < 1){
        uiChange('lose');
        $('#div-form').before('<p class="Lose response result text-center"><span id="lose">You Lose! </span> The Winning Number is: '+winningNumber+' </p>');
      }
    }
  }
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
  console.log('hint function');
  var onesPlace = winningNumber % 10;
  var hint = "Hint: Then Winning Number has a "+onesPlace+" as its least significant digit.";
  $('#hint').remove();
  $('#button-row').after('<p id="hint" class="text-center"> '+hint+'</p>');
}

// Allow the "Player" to Play Again

function playAgain(){
  uiChange('initial');
  $('#hint').remove();
  $('.response').remove();
  $('.guesses').remove();
	initialize();
}

function uiChange(state){
  if(state=='initial'){
    $('body').removeClass();
    $('body').addClass('initial');
  }
  if(state == 'frozen'){
    floating({
    content: "⛄️",
    number: 1,
    duration: 7,
    repeat: 1
    });
    floating({
    content: "⛄️",
    number: 1,
    duration: 7,
    repeat: 1
    });
    floating({
    content: '<img src="assets/frozen.jpg">',
    number: 1,
    duration: 7,
    repeat: 1
    });
    $('body').removeClass();
    $('body').addClass('frozen');
  }
  if(state== 'cold'){
    floating({
    content: "🏂",
    number: 1,
    duration: 5,
    repeat: 1
    });
    floating({
    content: "🏂",
    number: 1,
    duration: 5,
    repeat: 1
    });
    floating({
    content: "brrrrr...",
    number: 1,
    duration: 5,
    repeat: 1
    });
    $('body').removeClass();
    $('body').addClass('cold');

  }
  if(state== 'warm'){
    floating({
    content: "🌤",
    number: 1,
    duration: 5,
    repeat: 1
    });
    floating({
    content: "🌤",
    number: 1,
    duration: 5,
    repeat: 1
    });
    floating({
    content: "🌤",
    number: 1,
    duration: 5,
    repeat: 1
    });
    $('body').removeClass();
    $('body').addClass('warm');

  }
  if(state== 'hot'){
    floating({
    content: "🌭",
    number: 1,
    duration: 5,
    repeat: 1
    });
    floating({
    content: "♨️",
    number: 1,
    duration: 5,
    repeat: 1
    });
    floating({
    content: "🌶",
    number: 1,
    duration: 5,
    repeat: 1
    });
    $('body').removeClass();
    $('body').addClass('hot');
  }
  if(state=='fire'){
    floating({
    content: "🔥",
    number: 1,
    duration: 3,
    repeat: 3
    });
    floating({
    content: "🔥",
    number: 1,
    duration: 3,
    repeat: 3
    });
    floating({
    content: "🔥",
    number: 1,
    duration: 3,
    repeat: 3
    });
    floating({
    content: "🔥",
    number: 1,
    duration: 3,
    repeat: 3
    });
    floating({
    content: "🔥",
    number: 1,
    duration: 3,
    repeat: 3
    });
    floating({
    content: "🔥",
    number: 1,
    duration: 3,
    repeat: 3
    });
    $('body').removeClass();
    $('body').addClass('fire');
  }
  if(state=='win'){
    floating({
    content: "🏆",
    number: 1,
    duration: 3,
    repeat: 3
    });
    floating({
    content: "REMARKABLE!!!!!",
    number: 1,
    duration: 3,
    repeat: 3
    });
    floating({
    content: "YASSS!",
    number: 1,
    duration: 3,
    repeat: 3
    });
    floating({
    content: "🏆",
    number: 1,
    duration: 3,
    repeat: 3
    });
    $('body').removeClass();
    $('body').addClass('win');
  }
  if(state=='lose'){
    floating({
    content: "😫",
    number: 1,
    duration: 6,
    repeat: 3
    });
    floating({
    content: "awww",
    number: 1,
    duration: 6,
    repeat: 3
    });
    floating({
    content: "try again!",
    number: 1,
    duration: 6,
    repeat: 3
    });
    floating({
    content: "😰",
    number: 1,
    duration: 6,
    repeat: 3
    });
    $('body').removeClass();
    $('body').addClass('lose');
  }
}
/* **** Event Listeners/Handlers ****  */
$('#guess').on('click',playersGuessSubmission);
$('#hint-button').on('click', provideHint);
$('#play-again').on('click', playAgain);

$('#div-form').submit(function() {
  return false;
});

$("#input").keyup(function(event){
    if(event.keyCode == 13){
       $("#guess").click();
     }
});
