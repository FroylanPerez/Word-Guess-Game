var words = [
    "anthrax",
    "slayer",
    "motorhead",
    "megadeth",
    "rammstein",
    "pantera",
    "arkona",
    "ministry",
    "moonspell",
    "metallica"
    ];

    // Variable to kepp count fot wrong answers
    var wrongLetter = 0;


    // Variables to insert text in HTML
    var wordGuessText = document.getElementById("wordGuess");
    var okWordText = document.getElementById("okWord");
    var lettersWrongText = document.getElementById("lettersWrong");
    var congratulationsText = document.getElementById("congratulations");

    // Experiment with one single posible word
    // var possibleWord = "anthrax";
    // var wordLength = possibleWord.length;

    // Variables for keep tracking for win and loss
    // var remainingAttempts = 12
    // var wins = 0
            


    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];
    var wordLength = word.length;


    // Set up the answer array
    var answerArray = [];
    for (var i = 0; i < wordLength; i++) {
    answerArray[i] = "_";
    wordGuessText.textContent = answerArray.join(" ");
    }

    // var remainingLetters = "";

    document.onkeyup = function(event) {
        var guessedLetter = false;
        var guess = event.key;
        for (i = 0; i < wordLength; i++) {
            if (guess === word[i]) {
                answerArray[i] = guess;
                wordGuessText.textContent = answerArray.join(" ");
                guessedLetter = true;
            }
                    //     // Show wrong letters acumalted
        //     lettersWrongText.textContent = "You have clicked: " + wrongLetter + " wrong letters in this tried";
            // if (answerArray[i] === word[i]) {
            //     congratulationsText.textContent = "CONGRATULATIONS";
            // }
            // else {
            //     guessedLetter = false;
            // }
        }

        if (guessedLetter == true) {
            congratulationsText.textContent = "CONGRATULATIONS";            

        }
        else {
            congratulationsText.textContent = "BOOOOOOOO!!!!";
            wrongLetter++;
            lettersWrongText.textContent = "You have clicked: " + wrongLetter + " wrong letters in this tried";
        }
    }    





    //     for (i=0; i < wordLength; i++) {
    //         if (guess !== word[i]) {
    //             wrongLetter++;
    //         }
    //     lettersWrongText.textContent = "You have clicked: " + wrongLetter + " wrong letters in this tried";
    //     }
    // }



    // The game loop
//     while (remainingLetters > 0) {
//     // Show the player their progress
//     wordGuessText.textContent = (answerArray.join(" "));

//     // Update the game state with the guess
//     for (var k = 0; j < word.length; k++) {
//     if (word[k] === guess) {
//     answerArray[k] = guess;
//     remainingLetters--;
//              }
//         }
    
//     // The end of the game loop
//  }
 // Show the answer and congratulate the player
    