var fs = require("fs");


function Letter() {
	this.guessedCorrect = false;
	this.correctLetter;
	this.letterReturn = function() {
		if (this.guessedCorrect) {
			return correctLetter;
		} else {
			return "_";
		}
	}
	this.checker = function(guessedLetter, letterInWord) {
		if (guessedLetter === letterInWord) {
			this.guessedCorrect = true;
			correctLetter = guessedLetter;
		} else {
			this.guessedCorrect = false;
		}
	}
} 


module.exports.letterConstructor = new Letter();