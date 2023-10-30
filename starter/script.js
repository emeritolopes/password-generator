// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var numberCharacters = prompt("How many characters do you want? They have to be more than 8 and less than 128");
var includeUppercase = confirm("Include uppercase letters?");
var includeLowercase = confirm("Include lowercase letters?");
var includeNumbers = confirm("Include numbers?");
var includeSpecialChars = confirm("Include special characters?");

if(numberCharacters === false && includeUppercase === false && includeLowercase === false && includeNumbers === false && includeSpecialChars === false) {
  alert("You must select at least one type of character");
}

var passwordOptions = {
  numberCharacters: numberCharacters,
  includeUppercase: includeUppercase,
  includeLowercase: includeLowercase,
  includeNumbers: includeNumbers,
  includeSpecialChars: includeSpecialChars
};

  return passwordOptions;
// Function to prompt user for password options
function getPasswordOptions() {
 
}


// Function for getting a random element from an array
function getRandom(arr) {
var randomIndex = Math.floor(Math.random() * arr.length);
var randElement = arr[randomIndex];
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
 var options = getPasswordOptions(); 
//  var to store passw
 var result = []; 
//  arr to store types of chr
 var possibleCharacters = [];
//  arr to store each one of the char that will be used
 var definitiveCharacters = [];
}
// conditional that add number of characters to arr of possible pass
// push the random character to definitiveCharacters arr
if(options.numberCharacters) {
  possibleCharacters = possibleCharacters.concat(numberCharacters);
  definitiveCharacters.push(getRandom(numberCharacters));
}
// conditional that add upper case to arr of possible pass
// // push the random character to definitiveCharacters arr
if(options.includeUppercase) {
  possibleCharacters = possibleCharacters.concat(includeUppercase);
  definitiveCharacters.push(getRandom(includeUppercase));
}
// conditional that add lower case to arr of possible pass
// // push the random character to definitiveCharacters arr
if(options.includeLowercase) {
  possibleCharacters = possibleCharacters.concat(includeLowercase);
  definitiveCharacters.push(getRandom(includeLowercase));
}
// conditional that add a number characters to arr of possible pass
// // push the random character to definitiveCharacters arr
if(options.includeNumbers) {
  possibleCharacters = possibleCharacters.concat(includeNumbers);
  definitiveCharacters.push(getRandom(includeNumbers));
}
// conditional that add special characters to arr of possible pass
// // push the random character to definitiveCharacters arr
if(options.includeSpecialChars) {
  possibleCharacters = possibleCharacters.concat(includeSpecialChars);
  definitiveCharacters.push(getRandom(includeSpecialChars));
}

// for loop to get pass length 

for (var i =0; i < option.length; i++) {
  var possibleCharacters = getRandom(possibleCharacters);
  
  result.push(possibleCharacters);
}

for (var i = 0; i < definitiveCharacters.length; i++) {
  result[1] = definitiveCharacters[i];
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);