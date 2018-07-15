


// adding text on HTML using JavaScript
// grabbong the toons ID from HTML partion

var myH1 = document.getElementById("toons");
	myH1.innerText = "Looney Tunes";

// Typing content into the search box to show up in the newH1 ID
var myNewH1 = document.getElementById("character");

// funstion that will allow the content that you tpe in the seatch button show up in the new H! ID
function getInfo() { 
	var userInput = document.getElementById("userInput").value;
	console.log(userInput);
		myNewH1.innerText = userInput;
	}

// Array of 5 strings
var stringArray = ["Bugs", "Daffy", "Elmer","Porky", "Taz"]
// forloop of the 5 strings
	for(var i = 0; i< stringArray.length; i++) {
// allows you to see the five strings in your console
		console.log(stringArray[i]);
	}

// Object
var myObj = {

	name: "Bugs Bunny",
	age: 73,
	isHuman: false
};


// sets up applying the values in the console
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.isHuman);

// linking variable to HTML ID's to change content inside the ID elements
var firstHeading = document.getElementById("firstHeading");
var secondHeading = document.getElementById("secondHeading");
var thirdHeading = document.getElementById("thirdHeading");

// adding text to the elements where you had linked the H1
	firstHeading.textContent = myObj.name;
	secondHeading.textContent = myObj.age;
	thirdHeading.textContent = myObj.isHuman;


// cartoon character array
var toonCharacters = [
	{
		name:'Bugs Bunny',
		age: 73,
		species: "rabbit"
	},

	{
		name:'Daffy Duck',
		age: 74,
		species: "duck"
	},

	{
		name:'Elmer Fudd',
		age: 81,
		species: "human"
	}

	];

// forloop of toon character array
	for(var i = 0; i < toonCharacters.length; i++) {

// adding arrays to the console
		console.log(toonCharacters[i].name);
		console.log(toonCharacters[i].age);
		console.log(toonCharacters[i].species);
}


// changes text color 
		
document.body.style.color="orange";











