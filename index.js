var word = require("./word.js");
var inquirer = require("inquirer");

function Index() {
	this.wordSelect = function() {
		var selection = wordObject[Math.floor(Math.random() * 3 + 1)];
		//console.log(selection);
		//console.log(word.letterArray);
		var newWord = new word(selection);
		//console.log(newWord.letterArray);
	}
	this.mainGame = inquirer.prompt([
		{
		type: "input",
		name: "theLetterGuess",
		message: "Guess a letter" 	
		}
	]).then(function(answers) {
		console.log(answers);


	})
}




var wordObject = {
	1: "person",
	2: "place",
	3: "thing"
}

var newIndex = new Index();
//newIndex.wordSelect();
newIndex.wordSelect();
newIndex.mainGame();
//module.exports.IndexConstructor = new Index();