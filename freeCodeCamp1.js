// Example
var ourName;
// Declare myName below this line
var myName;

// Setup
var a;
var b = 2;
// Only change code below this line
a = 7;
b = a;

// Example
var ourVar = 19;
// Only change code below this line
var myVar = 0;
var a = 9;

// Initialize these three variables
var a;
var b;
var c;
// Do not change code below this line
a = 5;
b = 10;
c = "I am a"
a = a + 1;
b = b + 5;
c = c + " String!";

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

var sum = 10 + 10;

var difference = 45 - 33;

var product = 8 * 10;

var quotient = 66 / 33;

var myVar = 87;
// Only change code below this line
myVar++;

var myVar = 11;
// Only change code below this line
myVar--;

var ourDecimal = 5.7;
// Only change code below this line
var myDecimal = 5.7;

var product = 2.0 * 2.5;

var quotient = 4.4 / 2.0; // Fix this line

// Only change code below this line
var remainder;
remainder = 11 % 3 ;

var a = 3;
var b = 17;
var c = 12;
// Only modify code below this line
a += 12;
b += 9 ;
c += 7;

var a = 11;
var b = 9;
var c = 3;
// Only modify code below this line
a -= 6;
b -= 15;
c -= 1;

var a = 5;
var b = 12;
var c = 4.6;
// Only modify code below this line
a *= 5;
b *= 3;
c *= 10;

var a = 48;
var b = 108;
var c = 33;
// Only modify code below this line
a /= 12;
b /= 4;
c /= 11;

// Example
var firstName = "Alan";
var lastName = "Turing";
// Only change code below this line
var myFirstName = "Moataz";
var myLastName = "Alkurdi"

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine'; // Change this line

// Example
var ourStr = "I come first. " + "I come second.";
// Only change code below this line
var myStr = "This is the start. " + "This is the end.";

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";
// Only change code below this line
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// Only change code below this line
var myName = "Moataz";
var myStr = "My name is " + myName + " I am well!";

// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// Only change code below this line
var someAdjective = "smart";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Example
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";
// Only change code below this line.
lastNameLength = lastName.length;

// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0];

// Setup
var myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Fix Me

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
// Setup
var lastName = "Lovelace";
// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
// Setup
var lastName = "Lovelace";
// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length -1];

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
// Setup
var lastName = "Lovelace";
// Only change code below this line
var secondToLastLetterOfLastName =lastName[ lastName.length -2];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb
    // Your code above this line
    return result;
  }
  // Change the words here to test your function
  wordBlanks("dog", "big", "ran", "quickly");
  
  // Example
var ourArray = ["John", 23];
// Only change code below this line.
var myArray = ["sleep", 7];

// Example
var ourArray = [["the universe", 42], ["everything", 101010]];
// Only change code below this line.
var myArray = [["anna", 7], ["suzan", 5]];

// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];
// Only change code below this line.
var myData = myArray[0];

// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];
// Only change code below this line.
myArray[0] = 45

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// Only change code below this line.
var myData = myArray[0][0];
var myData = myArray[2][1]

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line.
myArray.push(["dog", 3]);

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line.
var removedFromMyArray;
removedFromMyArray = myArray.pop();

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
// Setup
var myArray = [["John", 23], ["dog", 3]];
// Only change code below this line.
var removedFromMyArray;
removedFromMyArray = myArray.shift();

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line.
myArray.unshift(["Paul", 35]);