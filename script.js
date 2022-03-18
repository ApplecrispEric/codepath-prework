// Added features: Randomly generated pattern, extra button, button labels.


// Global Variables.
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.4;  // Must be between 0.0 and 1.0.
var guessCounter = 0;
var pattern;
var gameLength;  // Length of the final guessing cycle.

// Global Constants.
const clueHoldTime = 500; // Length of clue light and sound.
const cluePauseTime = 333; // How long to pause in between clues.
const nextClueWaitTime = 1000; // How long to wait before starting playback of the clue sequence.

function startGame() {
  // Initialize game variables.
  progress = 0;
  gamePlaying = true;
  gameLength = parseInt(document.getElementById("gameLengthInput").value)
  
  // Randomly generate the pattern.
  pattern = []
  for (let i = 0; i < gameLength; i++) {
    let buttonNumber = Math.floor(Math.random() * 5) + 1 // Generates a random int from 1 to 6 (to reduce bias).
    if (buttonNumber == 6) {  // If it is 6, reduce it to 5.
      buttonNumber--;
    }
    pattern.push(buttonNumber)
  }
  console.log(pattern)
  
  // Swap the Start and Stop buttons.
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame() {
  // Swap the Start and Stop buttons.
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  
  gamePlaying = false;
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if (!gamePlaying) {  // Check if the game is even in progress.
    return;
  }
  
  if (pattern[guessCounter] == btn) {  // Guess was correct.
    if (guessCounter == progress) {  // All guesses in the cycle were correct.
      if (progress == pattern.length - 1) {  // Last cycle, finished the game.
        winGame();
      } else {  // Next sequence.
        progress++;
        playClueSequence();
      }
    } else {  // Check the next guess.
      guessCounter++;
    }
  } else {  // Otherwise, guess was not correct.
    loseGame();
  }
}    
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations, you've won!");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// Sound Synthesis Functions.
const freqMap = {
  // The tones follow the C Major Pentatonic Scale.
  1: 261.6,  // C4
  2: 293.6,  // D4
  3: 329.6,  // E4
  4: 392,  // G4
  5: 440  // A4
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)