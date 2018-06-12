// This is the "Psychic Game" Script
    // Sets the initial conditions of the game
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    
    // creates a blank string variable to store the user's guesses
    // user guesses are pushed here in line (48) "totalGuesses.push..."
    var totalGuesses = [];

    // Creates the array of 26 lowercase letter choices for the computer and user to pick
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);

    function resetComputerGuess() {
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    // The following function is run whenever the user presses a key.
    $(document).ready(function() {
        
        // Randomly chooses a letter from the "alphabet" array (out of 26 possible choices)
        // This must happen BEFORE the loop is run, so only one letter is chosen per set of 9 guesses,
        // otherwise the computer will choose a new letter after EACH guess.
        // Note: since the game is limited to 9 incorrect guesses, we must run the loop a minimum of 9 times

        for (var i = 0; i < 9; i++) {
            document.onkeyup = function(event) {
                // Determines which key was pressed.
                var userChoice = event.key;
                console.log(userChoice);

                // converts any choice to lowercase to simplify
                var userGuess = userChoice.toLowerCase();
                console.log(userGuess);
                
                // use a method to pass the variable userGuess TO the totalGuesses string/array
                totalGuesses.push(userGuess);
                console.log(totalGuesses);
                
                // Compares the two choices
                // If the user choice matches the random computer choice, tallies a "Win"
                if (userGuess === computerGuess) {
                    wins++;

                    // var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
                    guessesLeft = 9;

                    //clears the array "totalGuesses" so it will start reporting from an emtpy array
                    totalGuesses.length = 0;
                    // var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
                    // console.log(computerGuess);

                    resetComputerGuess();
                    console.log(computerGuess);
                }
                
                // If not, records a guess (subtracting one from the total of 9 possible per round) 
                else {
                    guessesLeft--;
                }

                if (guessesLeft === 0) {
                    
                    // Tallies a "Loss," resets the guessesLeft to 9, clears the array "totalGuesses," and resets the variable computerGuess
                    // note: we COULD create a "reset" function to run all these actions 
                    losses++;
                    guessesLeft = 9;
                    totalGuesses.length = 0;
                    resetComputerGuess();
                    console.log(computerGuess);
                    console.log(userGuess === computerGuess);
                    console.log(guessesLeft);
                }

                // Keeps track of and displays the number of guesses remaining
                // Displays the current set of incorrect guesses
                // Creates a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses.
                var html =
                "<p>Your guesses so far: " + totalGuesses +
                "<p>You have " + guessesLeft + " guesses left." +
                "<p>wins: " + wins + "</p>" +
                "<p>losses: " + losses + "</p>";

                // Set the inner HTML contents of the #game div to our html string
                document.querySelector("#game").innerHTML = html;
            }
        }
    })      
