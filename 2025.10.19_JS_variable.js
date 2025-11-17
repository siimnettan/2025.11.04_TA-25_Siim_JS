let myName;
let myAge;

myName = "Chris";
myAge = 37;

let myDog = "Rover";

var myName;
var myAge;

myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

let myAge = 17;
let dolphinGoodbye = "So long and thanks for all the fish";
let iAmAlive = true;
let test = 6 < 3;
// Array
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40

let dog = { name: "Spot", breed: "Dalmatian" };

dog.name;

// Dynamic typing 
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;

// const
let count; // seda saab teha 
// EI const count; // ei saa teha

const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"

bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"