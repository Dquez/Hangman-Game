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
    var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var games = ["spyro", "pokemon", "metroid", "battletoads", "crashbandicoot", "supermarioworld", "donkeykongcountry"];
    var gameRandom = "";

    // the number of guesses a user has left, decrementing down to 0
    var guessCount = 10;
    var correctCount = 0;
    var spaces = 0;
    var alertWinLose = true;
    var doubleGuessed = [];
    var lettersGuessed = [];


    // Function to begin the set up of the round

    function startUp() {

        //Computer randomly selects an item from the array
        gameRandom = games[Math.floor(Math.random() * games.length)];

        console.log(gameRandom)

        //Breaks word into letters
        wordLetters = gameRandom.split("");

        //Insert spaces per wordLetter length (length of entire string broken into separate characters)
        spaces = wordLetters.length;

        // function to be dynamically change after each guess
        // function incorrect() {

        //     incorrectGuesses.innerHTML = ("You've guessed" + incorrectArr + "... Use the other " + guessCount + " wisely...");
        // }



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

    function restart() {

    }


    $("#restart").on("click", function() {
        guessCount = 10;
        correctArr = [];
        correctCount = 0;
        incorrectArr = [];
        $("#current-word").empty();
        gameRandom = games[Math.floor(Math.random() * games.length)];
        document.getElementById("classics").src = "assets/images/game-img.jpg";
        startUp();


    });


    // Code to adapt for Drawing hangman

    //           // Animate man
    //   var animate = function () {
    //     var drawMe = lives ;
    //     drawArray[drawMe]();
    //   }


    //    // Hangman
    //   canvas =  function(){

    //     myStickman = document.getElementById("stickman");
    //     context = myStickman.getContext('2d');
    //     context.beginPath();
    //     context.strokeStyle = "#fff";
    //     context.lineWidth = 2;
    //   };

    //     head = function(){
    //       myStickman = document.getElementById("stickman");
    //       context = myStickman.getContext('2d');
    //       context.beginPath();
    //       context.arc(60, 25, 10, 0, Math.PI*2, true);
    //       context.stroke();
    //     }

    //   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

    //     context.moveTo($pathFromx, $pathFromy);
    //     context.lineTo($pathTox, $pathToy);
    //     context.stroke(); 
    // }

    //    frame1 = function() {
    //      draw (0, 150, 150, 150);
    //    };

    //    frame2 = function() {
    //      draw (10, 0, 10, 600);
    //    };

    //    frame3 = function() {
    //      draw (0, 5, 70, 5);
    //    };

    //    frame4 = function() {
    //      draw (60, 5, 60, 15);
    //    };

    //    torso = function() {
    //      draw (60, 36, 60, 70);
    //    };

    //    rightArm = function() {
    //      draw (60, 46, 100, 50);
    //    };

    //    leftArm = function() {
    //      draw (60, 46, 20, 50);
    //    };

    //    rightLeg = function() {
    //      draw (60, 70, 100, 100);
    //    };

    //    leftLeg = function() {
    //      draw (60, 70, 20, 100);
    //    };

    //    var drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 




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
                    // if (correctArr.indexOf(userInput) > -1) {
                    //     doubleGuessed.push(userInput);
                    // }
                    // Figure out a way to not add to the correctCount when clicking the same letter.
                }


            }
        } 
        /*else if (incorrectArr.indexOf(userInput) > -1) {
            doubleGuessed.push(userInput);
        } */
        else {
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

        if (lettersGuessed.indexOf(userGuess) !== -1) {
            return;
        }

        lettersGuessed.push(userGuess)

        // loops through array of letters
        for (var i = 0; i < allLetters.length; i++) {
            // if User presses a key within the array, game functions will begin.
            if (userGuess === allLetters[i]) {

                checkLetters(userGuess);
                score();

            }
        }
    }
});