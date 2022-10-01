var generateBtn = document.querySelector("#generate");

//lower/upper limit password length
var lowerlimit = 8
var upperlimit = 128

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

// Display password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to prompt user to select a password length between lowerlimit-upperlimit as well as a combination of lowercase letters, uppercase letters, special characters and numbers
function generatePassword() {
  // Ask user how many characters they want their password to be and ensure it comes through as datatype number
  var pLength = parseInt(prompt("How many characters would you like your random password to be? Please provide a password length between " + lowerlimit + " and " + upperlimit + " characters:"),10);
  console.log("Password Length: " + pLength);

  // Check to make sure the user entered a number
  if (Number.isNaN(pLength)) {
      alert("Must enter a valid number between " + lowerlimit + " and " + upperlimit + ".");
      return null;
    }

  // Check to make sure the user entered a number between 8 and 128
  else if (pLength < 8 || pLength > 128) {
    alert("Must enter a number value greater than or equal to " + lowerlimit + " and less than or equal to " + upperlimit +".");
  }
  // Prompt the user to confirm which type of characters to include in their random password
  else {
    lowerConfirm = confirm("Click 'OK' to confirm including LOWER CASE characters or 'Cancel' to not include.");
    console.log("Lower Case: " + lowerConfirm);
    upperConfirm = confirm("Click 'OK' to confirm including UPPER CASE characters or 'Cancel' to not include.");
    console.log("Upper Case: " + upperConfirm);
    numberConfirm = confirm("Click 'OK' to confirm including NUMBERS or 'Cancel' to not include.");
    console.log("Number: " + numberConfirm);
    specialConfirm = confirm("Click 'OK' to confirm including SPECIAL characters or 'Cancel' to not include.");
    console.log("Special Character: " + specialConfirm);
  }
  
  // No options selected
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    alert("You must select at least 1 type of character to include in your password");
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

  // randomly select characters from the users selected type(s) of variables
  var passwordarray = []

  for (var count = 0; count < pLength; count++) {
    var selection = userCharacters[Math.floor(Math.random() * userCharacters.length)];
    passwordarray.push(selection);
    console.log(selection);
  }

  // join the password array and return the password variable
  var newpassword = passwordarray.join("");
  console.log("Your Pasword is: " + password);
  return newpassword;

}

