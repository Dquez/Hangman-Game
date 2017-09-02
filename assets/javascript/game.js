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
var incorrectGuesses = document.getElementById("incorrect-guesses");
var incorrectArr = [];
var guessCount = 0;

function incorrect(){

	incorrectGuesses.innerHTML = ("You've guessed" + incorrectArr + "... Use the other " + guessCount + " wisely...");
}


function numberOfSpaces(n, spaces) {
    var repeat = [];
    repeat.length = n + 1;
    return repeat.join(spaces);
    console.log(repeat);
}


var games = ["Spyro", "Pokemon", "Metroid", "BattleToads", "CrashBandicoot", "SuperMarioWorld", "DonkeyKongCountry"];


// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

// if word has indexOf /char (num) document.innerHTML = var  underscore * (num) _ _ _ _ _ _


$(document).ready(function() {
    

    for (i = 0; i < games.length; i++) {
        if (games[i] === "Spyro") {

           	var guessCount = 10;
            var currentWord = document.getElementById("current-word");
            currentWord.textContent = (numberOfSpaces(games[0].length, "_ "));
             // console.log(numberOfSpaces(games[0].length, "_ "));
			var currentLetter = currentWord.textContent.split(" ");
			// console.log(currentLetter[4]);
			var userGuess = document.getElementById("user-guess");
			// console.log(guessCount);
   //        	console.log(currentLetter.length);
   //        	console.log(currentWord.textContent);
          	currentLetter.splice(0, 1, "S");
          	currentLetter.splice(1, 1, "p");
          	currentLetter.pop("");
          	console.log(currentLetter);
          	currentLetter = currentWord.textContent;
    		// Next, we give JavaScript a function to execute when onkeyup event fires.
    		document.onkeyup = function(event) {
        	userGuess.textContent = event.key;

        	switch (event.key) {
          		case "s":
          		currentLetter.splice(0, 1, "S");
          		break;
          		case "p":
          		currentLetter.splice(1, 1, "p");
          		break;
          		case "y":
          		currentLetter.splice(2, 1, "y");
          		break;
          		case "r":
          		currentLetter.splice(3, 1, "r");
          		break;
          		case "o":
          		currentLetter.splice(4, 1, "o");
          		break;

          		default:
          		incorrectArr.push(event.key);
          		guessCount--;
          		// if (incorrectArr.indexOf(event.key) > -1) {
          		// 	break;
          		// }
          		// else {
          		// incorrectArr.push(event.key);
          		// guessCount--;
          		// }
          	}


// array.splice( insertAtIndex, 0, stringToBeInserted );


        }
      }
  }
});






//         	if ( this.indexOf("") > -1 )  { alert( "found it" );  } 
// userGuess.textContent)
//         	As the user guesses the correct letters, reveal them: m a d o _ _ a.

// if word array has .indexOf (guesses) { put in correct array} else {put in incorrect array};

        // if event.key === letter in array (arr[i] after looped through it) then push to array at indexOf[position in array]
   //  }

   //      }
   //      else if (games[i] === "Pokemon") {
           
   //          var currentWord = document.getElementById("current-word");
   //          currentWord.textContent = (numberOfSpaces(games[1].length, "_ "));
   //           // console.log(numberOfSpaces(games[1].length, "_ "));
   //          var currentLetter = currentWord.textContent.split(" ");
			// console.log(currentLetter[4]);
   //      }
   //      else if (games[i] === "Metroid") {
           
   //          var currentWord = document.getElementById("current-word");
   //          currentWord.textContent = (numberOfSpaces(games[2].length, "_ "));
   //           // console.log(numberOfSpaces(games[2].length, "_ "));
   //          var currentLetter = currentWord.textContent.split(" ");
			// console.log(currentLetter[4]);
   //      }
   //      else if (games[i] === "BattleToads") {
           
   //          var currentWord = document.getElementById("current-word");
   //          currentWord.textContent = (numberOfSpaces(games[3].length, "_ "));
   //           // console.log(numberOfSpaces(games[3].length, "_ "));
   //           var currentLetter = currentWord.textContent.split(" ");
			// console.log(currentLetter[4]);
   //      }
   //      else if (games[i] === "CrashBandicoot") {
           
   //          var currentWord = document.getElementById("current-word");
   //          currentWord.textContent = (numberOfSpaces(games[4].length, "_ "));
   //           // console.log(numberOfSpaces(games[4].length, "_ "));
   //           var currentLetter = currentWord.textContent.split(" ");
			// console.log(currentLetter[4]);
   //      }
   //      else if (games[i] === "SuperMarioWorld") {
           
   //          var currentWord = document.getElementById("current-word");
   //          currentWord.textContent = (numberOfSpaces(games[5].length, "_ "));
   //           // console.log(numberOfSpaces(games[5].length, "_ "));
   //           var currentLetter = currentWord.textContent.split(" ");
			// console.log(currentLetter[4]);
   //      }
   //      else {
           
   //          var currentWord = document.getElementById("current-word");
   //          currentWord.textContent = (numberOfSpaces(games[6].length, "_ "));
   //           // console.log(numberOfSpaces(games[6].length, "_ "));
   //          var currentLetter = currentWord.textContent.split(" ");
			// console.log(currentLetter[4]);
   //      }
   //  }


// });