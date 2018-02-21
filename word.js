var letter = require("./letter.js");
var index = require("./index.js")



var displayedWord = "";

function Word(wordInPlay) {
	this.letterArray = wordInPlay.split("");

	this.returnFunction = function() {
			displayedWord = displayedWord + letter.letterConstructor.letterReturn() + " ";
	} 
	this.letterGuessed = function() {
		var guessedLetter = process.argv[2];
		for (var i = 0; i < this.letterArray.length; i++) {
			letter.letterConstructor.checker(guessedLetter, this.letterArray[i]);
			this.returnFunction();
		}
	console.log(displayedWord)
	}
	
}


module.exports = Word;


