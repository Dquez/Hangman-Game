// Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
// Late 90s games theme 
// Spyro, Pokemon, Metroid, BattleToads, CrashBandicoot, SuperMarioWorld, DonkeyKongCountry

// Use key events to listen for the letters that your players will type.
// var stats = document.getElementById("stats");
// function reWriteStats() {
//           stats.innerHTML = 
//           car.make + "<br>" + 
//           car.color + "<br>" +
//           car.model + "<br>" +
//           car.mileage + "<br>" +
//           car.isWorking + "<br>";
//       }




// Wins: (#(var wins) of times user guessed the word correctly).
// var numberOfSpaces = games[].length;

var wins = 0;
var losses = 0;

function numberOfSpaces(n, spaces) {
    var repeat = [];
    repeat.length = n + 1;
    return repeat.join(spaces);
}


var games = ["Spyro", "Pokemon", "Metroid", "BattleToads", "CrashBandicoot", "SuperMarioWorld", "DonkeyKongCountry"];


// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

// if word has indexOf /char (num) document.innerHTML = var  underscore * (num) _ _ _ _ _ _


$(document).ready(function() {
    var userGuess = document.getElementById("user-guess");
    // Next, we give JavaScript a function to execute when onkeyup event fires.
    document.onkeyup = function(event) {
        userGuess.textContent = event.key;

        // if event.key === letter in array (arr[i] after looped through it) then push to array at indexOf[position in array]
    }

    for (i = 0; i < games.length; i++) {
        if (games[i] === "Spyro") {
           
            var currentWord = document.getElementById("current-word");
            currentWord.textContent = (numberOfSpaces(games[0].length, "_ "));
             console.log(numberOfSpaces(games[0].length, "_ "));
        }
        else if (games[i] === "Pokemon") {
           
            var currentWord = document.getElementById("current-word");
            currentWord.textContent = (numberOfSpaces(games[1].length, "_ "));
             console.log(numberOfSpaces(games[1].length, "_ "));
        }
        else if (games[i] === "Metroid") {
           
            var currentWord = document.getElementById("current-word");
            currentWord.textContent = (numberOfSpaces(games[2].length, "_ "));
             // console.log(numberOfSpaces(games[0].length, "_ "));
        }
        else if (games[i] === "BattleToads") {
           
            var currentWord = document.getElementById("current-word");
            currentWord.textContent = (numberOfSpaces(games[3].length, "_ "));
             // console.log(numberOfSpaces(games[0].length, "_ "));
        }
        else if (games[i] === "CrashBandicoot") {
           
            var currentWord = document.getElementById("current-word");
            currentWord.textContent = (numberOfSpaces(games[4].length, "_ "));
             // console.log(numberOfSpaces(games[0].length, "_ "));
        }
        else if (games[i] === "SuperMarioWorld") {
           
            var currentWord = document.getElementById("current-word");
            currentWord.textContent = (numberOfSpaces(games[5].length, "_ "));
             // console.log(numberOfSpaces(games[0].length, "_ "));
        }
        else {
           
            var currentWord = document.getElementById("current-word");
            currentWord.textContent = (numberOfSpaces(games[6].length, "_ "));
             // console.log(numberOfSpaces(games[0].length, "_ "));
        }
    }



});