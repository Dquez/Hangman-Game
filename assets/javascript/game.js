// Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
// Late 90s games theme 

// Win var to keep track of correct full-word-guesses
var wins = 0;
// where the incorrect guesses will be displayed on the screen
var incorrectGuesses = document.getElementById("incorrect-guesses");
// the array holding the incorrect guesses
var incorrectArr = [];
// the array holding the correct guesses
var correctArr = [];

// the number of guesses a user has left, decrementing down to 0
var guessCount = 10;
var games = ["Spyro", "Pokemon", "Metroid", "BattleToads", "CrashBandicoot", "SuperMarioWorld", "DonkeyKongCountry"];
var newArr;

// function to be dynamically change after each guess
function incorrect(){

	incorrectGuesses.innerHTML = ("You've guessed" + incorrectArr + "... Use the other " + guessCount + " wisely...");
}

// function to display underscores for the length of the game
function numberOfSpaces(n, spaces) {
    var repeat = [];
    repeat.length = n + 1;
    return repeat.join(spaces);
    console.log(repeat);
}

$(document).ready(function() {
	// loop to choose the word from game list
    for (i = 0; i < games.length; i++) {
        if (games[i] === "Spyro") {
        	
 			// I had most trouble in this section. I couldn't figure out how to manipulate the newArr on the page, but I was able to do it in the console.
            var currentWord = document.getElementById("current-word");	
            // function from earlier to display the spaces as long as the word chosen.
            correctArr = (numberOfSpaces(games[0].length, "_ "));
            // making the correctArr of spaces into an array.
            var newArr = correctArr.split(" ");

            // checking if newArr is an array so I can easily splice it.
            console.log(Array.isArray(newArr));
            currentWord.textContent = newArr;
            newArr.pop("");
			// when I create the array, it has a 6th element of a blank space so I use the .pop method to get rid of it.

			// where I want my user's key to appear
			var userGuess = document.getElementById("user-guess");

			// I console logged here to make sure things were working as they should.
          	console.log(newArr.length);
          	console.log(currentWord.textContent);
          	console.log(newArr);

          	// Here I was manipulating the newArr in the console which I couldn't do on the actual HTML
          	newArr.splice(0, 1, "S");

          	newArr.splice(1, 1, "p");
         
          	
    		// Next, we give JavaScript a function to execute when onkeyup event fires.
    		document.onkeyup = function(event) {
        	userGuess.textContent = event.key;
        	// Here's a switch statement to alternate between the keys pressed to splice the correct guesses into newArr
        	switch (event.key) {
          		case "s":
          		newArr.splice(0, 1, "S");
          		break;
          		case "p":
          		newArr.splice(1, 1, "p");
          		break;
          		case "y":
          		newArr.splice(2, 1, "y");
          		break;
          		case "r":
          		newArr.splice(3, 1, "r");
          		break;
          		case "o":
          		newArr.splice(4, 1, "o");
          		break;
          		// the default is to put the keys into the incorrectArr and lower the guessc count
          		default:
          		// if incorrectArr already has the event.key, it'll skip the code block
          		if (incorrectArr.indexOf(event.key) > -1) {
          			break;
          		}
          		// 
          		else {
          		incorrectArr.push(event.key);
          		guessCount--;
          		}
          	}

        }
      }
      if (games[i] === "Pokemon") {
        	
 			// I had most trouble in this section. I couldn't figure out how to manipulate the newArr on the page, but I was able to do it in the console.
            var currentWord = document.getElementById("current-word");	
            // function from earlier to display the spaces as long as the word chosen.
            correctArr = (numberOfSpaces(games[0].length, "_ "));
            // making the correctArr of spaces into an array.
            var newArr = correctArr.split(" ");

            // checking if newArr is an array so I can easily splice it.
            console.log(Array.isArray(newArr));
            currentWord.textContent = newArr;
            newArr.pop("");
			// when I create the array, it has a 6th element of a blank space so I use the .pop method to get rid of it.

			// where I want my user's key to appear
			var userGuess = document.getElementById("user-guess");

			// I console logged here to make sure things were working as they should.
          	console.log(newArr.length);
          	console.log(currentWord.textContent);
          	console.log(newArr);

          
         
          	
    		// Next, we give JavaScript a function to execute when onkeyup event fires.
    		document.onkeyup = function(event) {
        	userGuess.textContent = event.key;
        	// Here's a switch statement to alternate between the keys pressed to splice the correct guesses into newArr
        	switch (event.key) {
          		case "p":
          		newArr.splice(0, 1, "P");
          		break;
          		case "o":
          		newArr.splice(1, 1, "o");
          		break;
          		case "k":
          		newArr.splice(2, 1, "k");
          		break;
          		case "e":
          		newArr.splice(3, 1, "e");
          		break;
          		case "m":
          		newArr.splice(4, 1, "m");
          		break;
          		case "o":
          		newArr.splice(5, 1, "o");
          		break;
          		case "n":
          		newArr.splice(6, 1, "n");
          		break;
          		// the default is to put the keys into the incorrectArr and lower the guessc count
          		default:
          		// if incorrectArr already has the event.key, it'll skip the code block
          		if (incorrectArr.indexOf(event.key) > -1) {
          			break;
          		}
          		// 
          		else {
          		incorrectArr.push(event.key);
          		guessCount--;
          		}
          	}

        }
      }
      if (games[i] ===  "Metroid") {
        	
 			// I had most trouble in this section. I couldn't figure out how to manipulate the newArr on the page, but I was able to do it in the console.
            var currentWord = document.getElementById("current-word");	
            // function from earlier to display the spaces as long as the word chosen.
            correctArr = (numberOfSpaces(games[0].length, "_ "));
            // making the correctArr of spaces into an array.
            var newArr = correctArr.split(" ");

            // checking if newArr is an array so I can easily splice it.
            console.log(Array.isArray(newArr));
            currentWord.textContent = newArr;
            newArr.pop("");
			// when I create the array, it has a 6th element of a blank space so I use the .pop method to get rid of it.

			// where I want my user's key to appear
			var userGuess = document.getElementById("user-guess");

			// I console logged here to make sure things were working as they should.
          	console.log(newArr.length);
          	console.log(currentWord.textContent);
          	console.log(newArr);

          	// Here I was manipulating the newArr in the console which I couldn't do on the actual HTML
          
         
          	
    		// Next, we give JavaScript a function to execute when onkeyup event fires.
    		document.onkeyup = function(event) {
        	userGuess.textContent = event.key;
        	// Here's a switch statement to alternate between the keys pressed to splice the correct guesses into newArr
        	switch (event.key) {
          		case "m":
          		newArr.splice(0, 1, "M");
          		break;
          		case "e":
          		newArr.splice(1, 1, "e");
          		break;
          		case "t":
          		newArr.splice(2, 1, "t");
          		break;
          		case "r":
          		newArr.splice(3, 1, "r");
          		break;
          		case "o":
          		newArr.splice(4, 1, "o");
          		break;
          		case "i":
          		newArr.splice(5, 1, "i");
          		break;
          		case "d":
          		newArr.splice(6, 1, "d");
          		break;
          		// the default is to put the keys into the incorrectArr and lower the guessc count
          		default:
          		// if incorrectArr already has the event.key, it'll skip the code block
          		if (incorrectArr.indexOf(event.key) > -1) {
          			break;
          		}
          		// 
          		else {
          		incorrectArr.push(event.key);
          		guessCount--;
          		}
          	}

        }
      }
      if (games[i] === "BattleToads") {
        	
 			// I had most trouble in this section. I couldn't figure out how to manipulate the newArr on the page, but I was able to do it in the console.
            var currentWord = document.getElementById("current-word");	
            // function from earlier to display the spaces as long as the word chosen.
            correctArr = (numberOfSpaces(games[0].length, "_ "));
            // making the correctArr of spaces into an array.
            var newArr = correctArr.split(" ");

            // checking if newArr is an array so I can easily splice it.
            console.log(Array.isArray(newArr));
            currentWord.textContent = newArr;
            newArr.pop("");
			// when I create the array, it has a 6th element of a blank space so I use the .pop method to get rid of it.

			// where I want my user's key to appear
			var userGuess = document.getElementById("user-guess");

			// I console logged here to make sure things were working as they should.
          	console.log(newArr.length);
          	console.log(currentWord.textContent);
          	console.log(newArr);

          	// Here I was manipulating the newArr in the console which I couldn't do on the actual HTML
          	
         
          	
    		// Next, we give JavaScript a function to execute when onkeyup event fires.
    		document.onkeyup = function(event) {
        	userGuess.textContent = event.key;
        	// Here's a switch statement to alternate between the keys pressed to splice the correct guesses into newArr
        	switch (event.key) {
          		case "b":
          		newArr.splice(0, 1, "B");
          		break;
          		case "a":
          		newArr.splice(1, 1, "a");
          		break;
          		case "t":
          		newArr.splice(2, 1, "t");
          		break;
          		case "t":
          		newArr.splice(3, 1, "t");
          		break;
          		case "l":
          		newArr.splice(4, 1, "l");
          		break;
          		case "e":
          		newArr.splice(5, 1, "e");
          		break;
          		case "t":
          		newArr.splice(6, 1, "T");
          		case "o":
          		newArr.splice(7, 1, "o");
          		break;
          		case "a":
          		newArr.splice(8, 1, "a");
          		break;
          		case "d":
          		newArr.splice(9, 1, "d");
          		break;
          		case "s":
          		newArr.splice(10, 1, "s");
          		// the default is to put the keys into the incorrectArr and lower the guessc count
          		default:
          		// if incorrectArr already has the event.key, it'll skip the code block
          		if (incorrectArr.indexOf(event.key) > -1) {
          			break;
          		}
          		// 
          		else {
          		incorrectArr.push(event.key);
          		guessCount--;
          		}
          	}

        }
      }
      if (games[i] ===  "CrashBandicoot") {
        	
 			// I had most trouble in this section. I couldn't figure out how to manipulate the newArr on the page, but I was able to do it in the console.
            var currentWord = document.getElementById("current-word");	
            // function from earlier to display the spaces as long as the word chosen.
            correctArr = (numberOfSpaces(games[0].length, "_ "));
            // making the correctArr of spaces into an array.
            var newArr = correctArr.split(" ");

            // checking if newArr is an array so I can easily splice it.
            console.log(Array.isArray(newArr));
            currentWord.textContent = newArr;
            newArr.pop("");
			// when I create the array, it has a 6th element of a blank space so I use the .pop method to get rid of it.

			// where I want my user's key to appear
			var userGuess = document.getElementById("user-guess");

			// I console logged here to make sure things were working as they should.
          	console.log(newArr.length);
          	console.log(currentWord.textContent);
          	console.log(newArr);

          	// Here I was manipulating the newArr in the console which I couldn't do on the actual HTML
          
         
          	
    		// Next, we give JavaScript a function to execute when onkeyup event fires.
    		document.onkeyup = function(event) {
        	userGuess.textContent = event.key;
        	// Here's a switch statement to alternate between the keys pressed to splice the correct guesses into newArr
        	switch (event.key) {
          		case "C":
          		newArr.splice(0, 1, "C");
          		break;
          		case "r":
          		newArr.splice(1, 1, "r");
          		break;
          		case "a":
          		newArr.splice(2, 1, "a");
          		break;
          		case "s":
          		newArr.splice(3, 1, "s");
          		break;
          		case "h":
          		newArr.splice(4, 1, "h");
          		break;
          			case "B":
          		newArr.splice(6, 1, "B");
          		break;
          		case "a":
          		newArr.splice(7, 1, "a");
          		break;
          		case "n":
          		newArr.splice(8, 1, "n");
          		break;
          		case "d":
          		newArr.splice(9, 1, "d");
          		break;
          		case "i":
          		newArr.splice(10, 1, "i");
          		break;
          		case "c":
          		newArr.splice(11, 1, "c");
          		break;
          		case "o":
          		newArr.splice(12, 1, "o");
          		case "o":
          		newArr.splice(13, 1, "o");
          		break;
          		case "t":
          		newArr.splice(14, 1, "t");
          		break;
          		// the default is to put the keys into the incorrectArr and lower the guessc count
          		default:
          		// if incorrectArr already has the event.key, it'll skip the code block
          		if (incorrectArr.indexOf(event.key) > -1) {
          			break;
          		}
          		// 
          		else {
          		incorrectArr.push(event.key);
          		guessCount--;
          		}
          	}

        }
      }
      if (games[i] === "SuperMarioWorld") {
        	
 			// I had most trouble in this section. I couldn't figure out how to manipulate the newArr on the page, but I was able to do it in the console.
            var currentWord = document.getElementById("current-word");	
            // function from earlier to display the spaces as long as the word chosen.
            correctArr = (numberOfSpaces(games[0].length, "_ "));
            // making the correctArr of spaces into an array.
            var newArr = correctArr.split(" ");

            // checking if newArr is an array so I can easily splice it.
            console.log(Array.isArray(newArr));
            currentWord.textContent = newArr;
            newArr.pop("");
			// when I create the array, it has a 6th element of a blank space so I use the .pop method to get rid of it.

			// where I want my user's key to appear
			var userGuess = document.getElementById("user-guess");

			// I console logged here to make sure things were working as they should.
          	console.log(newArr.length);
          	console.log(currentWord.textContent);
          	console.log(newArr);

          	// Here I was manipulating the newArr in the console which I couldn't do on the actual HTML
          
         
          	
    		// Next, we give JavaScript a function to execute when onkeyup event fires.
    		document.onkeyup = function(event) {
        	userGuess.textContent = event.key;
        	// Here's a switch statement to alternate between the keys pressed to splice the correct guesses into newArr
        	switch (event.key) {
          		case "s":
          		newArr.splice(0, 1, "S");
          		break;
          		case "u":
          		newArr.splice(1, 1, "u");
          		break;
          		case "p":
          		newArr.splice(2, 1, "p");
          		break;
          		case "e":
          		newArr.splice(3, 1, "e");
          		break;
          		case "r":
          		newArr.splice(4, 1, "r");
          		break;
          		case "m":
          		newArr.splice(6, 1, "M");
          		break;
          		case "a":
          		newArr.splice(7, 1, "a");
          		break;
          		case "r":
          		newArr.splice(8, 1, "r");
          		break;
          		case "i":
          		newArr.splice(9, 1, "i");
          		break;
          		case "o":
          		newArr.splice(10, 1, "o");
          		break;
          		case "b":
          		newArr.splice(11, 1, "r");
          		break;
          		case "o":
          		newArr.splice(12, 1, "o");
          		case "s":
          		newArr.splice(13, 1, "s");
          		break;
          		// the default is to put the keys into the incorrectArr and lower the guessc count
          		default:
          		// if incorrectArr already has the event.key, it'll skip the code block
          		if (incorrectArr.indexOf(event.key) > -1) {
          			break;
          		}
          		// 
          		else {
          		incorrectArr.push(event.key);
          		guessCount--;
          		}
          	}

        }
      }
  }
});

// Psuedocode for rest of game ****


// If user runs out of guesses (guesscount is less than 1, GAME OVER)
 // If game[i] === newArr {
// 	alert("Congrats! want to try again?")
// }


// User will press any button to continue and the loop will switch to the next word.

// Styling will happen after I figure out how to get the game to work properly.


