var words = [
    "anthrax",
    "slayer",
    "motorhead",
    "megadeth"
    ];

    // Variables to insert text in HTML
    var wordGuessText = document.getElementById("wordGuess");
    var lettersWrongText = document.getElementById("lettersWrong");
    var remainingAttemptsText = document.getElementById("remainingAttempts");


    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];
    // Set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;
    // The game loop
    while (remainingLetters > 0) {
    // Show the player their progress
    wordGuessText.textContent = (answerArray.join(" "));

    // alert(answerArray.join(" ")); <-- Asi estaba originalmente

    // Get a guess from the player
    var guess = event.key;

    // var guess = prompt("Guess a letter, or click Cancel to stop playing."); <-- Asi estaba originalmente
    // if (guess === null) {
    // // Exit the game loop
    // break;
    // } else if (guess.length !== 1) {
    // alert("Please enter a single letter."); 
    // } else {  <----------------------------------------------------

    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
             }
        }
    
    // The end of the game loop
 }
 // Show the answer and congratulate the player

//  alert(answerArray.join(" "));  <---- Asi estaba originalmente
//  alert("Good job! The answer was " + word);  <---- Asi estaba originalmente