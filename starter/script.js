// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var numberCharacters = prompt(
    "How many characters do you want? They have to be more than 8 and less than 128"
  );
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // validate if numberCharacters is 8 to 128
  if (numberCharacters < 8 || numberCharacters > 128) {
    alert("The number of characters must be between 8 and 128. Please, try again.")
    getPasswordOptions();
  } else {
    alert (" you password will be " + numberCharacters + " long!")
  };

  if (
    includeUppercase === false &&
    includeLowercase === false &&
    includeNumbers === false &&
    includeSpecialChars === false
  ) {
    alert("You must select at least one type of character");
      return getPasswordOptions();
  }

  var passwordOptions = {
    numericCharacters: numericCharacters,
    includeUppercase: includeUppercase,
    includeLowercase: includeLowercase,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars,
  };

  return passwordOptions;
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

  // conditional that add number of characters to arr of possible pass
  // push the random character to definitiveCharacters arr
  if (options.includeNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    definitiveCharacters.push(getRandom(numericCharacters));
  }
  // conditional that add upper case to arr of possible pass
  // // push the random character to definitiveCharacters arr
  if (options.includeUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    definitiveCharacters.push(getRandom(upperCasedCharacters));
  }
  // conditional that add lower case to arr of possible pass
  // // push the random character to definitiveCharacters arr
  if (options.includeLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    definitiveCharacters.push(getRandom(lowerCasedCharacters));
  }
  // conditional that add a number characters to arr of possible pass
  // // push the random character to definitiveCharacters arr
  // if (options.includeNumbers) {
  //   possibleCharacters = possibleCharacters.concat(includeNumbers);
  //   definitiveCharacters.push(getRandom(includeNumbers));
  // }
  // conditional that add special characters to arr of possible pass
  // // push the random character to definitiveCharacters arr
  if (options.includeSpecialChars) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    definitiveCharacters.push(getRandom(specialCharacters));
  }

  // for loop to get pass length

  console.log(possibleCharacters)
  console.log(definitiveCharacters)

  for(var i = 0; i < options.numericCharacters - definitiveCharacters.length; i++) {
    result.push(getRandom(possibleCharacters))
  }

  return result.concat(definitiveCharacters).join("")

  // for (var i = 0; i < option.length; i++) {
  //   var possibleCharacters = getRandom(possibleCharacters);

  //   result.push(possibleCharacters);
  // }

  // for (var i = 0; i < definitiveCharacters.length; i++) {
  //   result[1] = definitiveCharacters[i];
  // }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
