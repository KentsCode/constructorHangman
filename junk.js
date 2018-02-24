//Inquirer 
var inquirer = require("inquirer");


// EMPTY ITEMS ARRAY

function Item(name, price) {
	this.name = name;
	this.price = price;
}


//STARTS PROMPT
var promptGB = function() {
	inquirer.prompt([
	{
		type: 'list',
		message: 'Welcome to Great Bay. Would you like to...',
		choices: ['POST AN ITEM', 'BID ON AN ITEM'],
		name: "Selection"
	}

	]).then(function(user) {
 		if (user.Selection === 'POST AN ITEM') {
 			
 			postItem();

 		}
 		else if (user.Seleciton === 'BIT ON AN ITEM') {

 			bidItem();

 		}
 	})
}

promptGB();

//CONTINUES PROMPT FOR POST METHOD
var postItem = function() {

	inquirer.prompt([
	{
		type: 'input',
		message: 'Enter Item Name',
		input: '',
		name: 'Selection'
	},
	{
		type:


	}
	]).then(function(user) {
 		
		console.log(user.Selection);

 	})
}

//CONTINUES PROMPT FOR BID
var bidItem = function() {

	//store with table item names
	var items = ["car", "plane", "train"];

	inquirer.prompt([
	{
		type: 'list',
		message: 'Select an Item to Bid On',
		choices: ['1', '2', '3,'],
		name: "Selection"
	}

	]).then(function(user) {
 		
 		console.log(user.Selection);


 	})
}
