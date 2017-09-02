// Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
// Late 90s games theme 


$(document).ready(function() {
    // Win var to keep track of correct full-word-guesses
    var wins = 0;
    var losses = 0;
    // where the incorrect guesses will be displayed on the screen
    var incorrectGuesses = document.getElementById("incorrect-guesses");
    // the array holding the incorrect guesses
    var incorrectArr = [];
    // the array holding the correct guesses
    var correctArr = [];
    var wordLetters = [];
    var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "
    ];
    var games = ["Spyro", "Pokemon", "Metroid", "BattleToads", "CrashBandicoot", "SuperMarioWorld", "DonkeyKongCountry"];
    var gameRandom = "";

    // the number of guesses a user has left, decrementing down to 0
    var guessCount = 10;
    var correctCount = 0;
    var spaces = 0;



    // Function to begin the set up of the round

    function startUp() {

        //Computer randomly selects an item from the array
        gameRandom = games[Math.floor(Math.random() * games.length)];

        //Breaks word into letters
        wordLetters = gameRandom.split("");

        //Insert spaces per wordLetter length (length of entire string broken into separate characters)
        spaces = wordLetters.length;

        // function to be dynamically change after each guess
        function incorrect() {

            incorrectGuesses.innerHTML = ("You've guessed" + incorrectArr + "... Use the other " + guessCount + " wisely...");
        }



        // Loop to display underscores for the length of the current game
        for (var i = 0; i < spaces; i++) {

            correctArr.push("_ ");
            document.getElementById("current-word").innerHTML = correctArr;
        }



        //Dynamically changes the "current word" to reflect correctArr changes
        document.getElementById("current-word").innerHTML = correctArr.join("");

        //Dynamically changes guess count to decrement by 1 each time user guesses incorrectly
        document.getElementById("guess-count").innerHTML = guessCount;

        //Dynamically changes incorrect guesses to add them to the incorrect array.
        document.getElementById("incorrect-guesses").innerHTML = incorrectArr;

        //Dynamically changes the win counter. 
        document.getElementById("wins").innerHTML = wins;

        //Dynamically changes the losses counter.
        document.getElementById("losses").innerHTML = losses;

    }




    // Function to check what letter the user pressed and run in through the logic statements to determine if it matches a letter from the selected word
    function checkLetters(userInput) {

        //Computer checks to see if letter guessed is in the random word
        if (gameRandom.indexOf(userInput) > -1) {

            //Loops through the spaces
            for (var i = 0; i < spaces; i++) {

                //Replaces current index space with user's guess
                if (wordLetters[i] === userInput) {

                    correctCount++;
                    correctArr[i] = userInput;
                    // reapplies the change everytime user's guess is correct
                    document.getElementById("current-word").innerHTML = correctArr.join("");


                }
            }

        } else {
            incorrectArr.push(userInput);
            guessCount--;

            // reapplies the change everytime user's guess is incorrect
            document.getElementById("incorrect-guesses").innerHTML = incorrectArr;
            document.getElementById("guess-count").innerHTML = guessCount;
        }
    }

    function score() {

        //If spaces = number of correct guesses
        if (correctCount === spaces) {

            wins++;
            // reapplies the change everytime user wins
            document.getElementById("wins").innerHTML = wins;
            alert("Looks like you're probably a 90's kid!");

        } else if (guessCount === 0) {

            losses++;
            // reapplies the change everytime user loses
            document.getElementById("losses").innerHTML = losses;
            alert("Kids these days don't know what they're missing...");
        }

    }

    startUp();

    document.onkeyup = function(event) {

        var userGuess = event.key;
        // loops through array of letters
        for (var i = 0; i < allLetters.length; i++) {
            // if User presses a key within the array, game functions will begin.
            if (userGuess === allLetters[i]) {

                var spliceLetters = allLetters.splice(i, 1);

                checkLetters(userGuess);
                score();

            }
        }
    }
});




$("#restart").on("click", function() {
    function populateStorage() {
        localStorage.setItem("wins", wins);
        localStorage.setItem("losses", losses);

        location.reload();
        var wins = storage.getItem("wins");
        var losses = storage.getItem("losses");
    }
    populateStorage();
});




// function newGame() {
//     $("#win").text("");
//     var games = new Array("Spyro", "Pokemon", "Metroid", "BattleToads", "CrashBandicoot", "SuperMarioWorld", "DonkeyKongCountry");
//     var random = games[Math.floor(Math.random() * games.length)];
//     startUp(games[random]);
// }

//     $('#restart').click(newGame);



// Psuedocode for rest of game ****
