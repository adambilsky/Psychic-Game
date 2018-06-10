// This is the "Psychic Game" Script
    // Sets the initial conditions of the game
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;

// Creates the set of letter choices for the computer and user to pick
    // This is an array of 26 lowercase letters
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var totalGuesses = [];
    // This function is run whenever the user presses a key.
    // Note: since the game is limited to 9 incorrect guesses, we must run the loop a minimum of 9 times
    $(document).ready(function() {

        for (var i = 0; i < guessesLeft; i++) {
            document.onkeyup = function(event) {

                // Determines which key was pressed.
                var userChoice = event.key;

                // converts any choice to lowercase to simplify
                var userGuess = userChoice.toLowerCase();

                // Randomly chooses a letter from the "alphabet" array (out of 26 possible choices)
                var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            
                // Compares the two choices
                // If the user choice matches the random computer choice, tallies a "Win"
                if (userGuess === computerGuess) {
                    wins++;
                }
                // If not, records a guess (subtracting one from the total of 9 possible per round) 
                else {
                    guessesLeft--;
                    totalGuesses.append(userGuess);
                }
                //Checks the current # of guesses to see if there are any left
            }
            if (guessesLeft === 0) {
                // Tallies a "Loss" and resets the guessesLeft to 9
                loss++;
                guessesLeft = 9;
            }
            // and record the next keystroke

            // Keep track of and display the number of guesses remaining
            // Display the current set of incorrect guesses
            // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
            "<p>Your guesses: " + totalGuesses;
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
        }
    })      
