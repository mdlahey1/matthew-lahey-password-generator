// Assignment Code
var generateBtn = document.querySelector("#generate");

// lowercase letters array
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase letters array
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// numbers array
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// special characters array
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// variable to store the user's choices
var userCharacters;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to prompt user to select a password length between 8-128 as well as a combination of lowercase letters, uppercase letters, special characters and numbers
function generatePassword() {
  // Ask user how many characters they want their password to be
  var pLength = prompt("How many characters would you like your random password to be? Please provide an integer between 8 and 128 characters.");
  console.log("Password Length: " + pLength);

  // Check to make sure the user entered a value
  if (!pLength) {
    alert("Must enter a valid number between 8 and 128.");
    return null;
  }
  // Check to make sure the user entered a number between 8 and 128
  else if (pLength < 8 || pLength > 128) {
    alert("Must enter a number value between 8 and 128");
  }
  // Prompt the user to confirm which type of characters to include in their random password
  else {
    lowerConfirm = confirm("Click 'OK' to confirm including lower case characters or 'Cancel' to not include.");
    console.log("Lower Case: " + lowerConfirm);
    upperConfirm = confirm("Click 'OK' to confirm including upper case characters or 'Cancel' to not include.");
    console.log("Upper Case: " + upperConfirm);
    numberConfirm = confirm("Click 'OK' to confirm including numbers or 'Cancel' to not include.");
    console.log("Number: " + numberConfirm);
    specialConfirm = confirm("Click 'OK' to confirm including special characters or 'Cancel' to not include.");
    console.log("Special Character: " + specialConfirm);
  }
  
  // No options selected
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    alert("You must include at least 1 type of character to include in your password");
    return null;
  }
  // 4 options selected (all of them)
  else if(lowerConfirm && upperConfirm && numberConfirm && specialConfirm) {
    userCharacters = lowerCase.concat(upperCase, numbers, specialCharacters);
    console.log(userCharacters);
  }

  // 3 options selected
  else if(lowerConfirm && upperConfirm && numberConfirm) {
    userCharacters = lowerCase.concat(upperCase, numbers);
    console.log(userCharacters);  
  }

  else if(lowerConfirm && upperConfirm && specialConfirm) {
    userCharacters = lowerCase.concat(upperCase, specialCharacters);
    console.log(userCharacters);  
  }

  else if(lowerConfirm && numberConfirm && specialConfirm) {
    userCharacters = lowerCase.concat(numbers, specialCharacters);
    console.log(userCharacters);  
  }

  else if(upperConfirm && numberConfirm && specialConfirm) {
    userCharacters = upperConfirm.concat(numbers, specialCharacters);
    console.log(userCharacters);
  }

  // 2 options selected
  else if(lowerConfirm && upperConfirm) {
    userCharacters = lowerCase.concat(upperCase);
    console.log(userCharacters);
  }
  
  else if(lowerConfirm && numberConfirm) {
    userCharacters = lowerCase.concat(numbers);
    console.log(userCharacters);
  }

  else if(lowerConfirm && specialConfirm) {
    userCharacters = lowerCase.concat(specialCharacters);
    console.log(userCharacters);
  }

  else if(upperConfirm && numberConfirm) {
    userCharacters = upperCase.concat(numbers);
    console.log(userCharacters);
  }

  else if(upperConfirm && specialConfirm) {
    userCharacters = upperCase.concat(specialCharacters);
    console.log(userCharacters);
  }

  else if(numberConfirm && specialConfirm) {
    userCharacters = numbers.concat(specialCharacters);
    console.log(userCharacters);
  }

  //1 option selected

  else if(lowerConfirm) {
    userCharacters = lowerCase;
    console.log(userCharacters);
  }

  else if(upperConfirm) {
    userCharacters = upperCase;
    console.log(userCharacters);
  }

  else if(numberConfirm) {
    userCharacters = numbers;
    console.log(userCharacters);
  }

  else if(specialConfirm) {
    userCharacters = specialCharacters;
    console.log(userCharacters);
  }
}