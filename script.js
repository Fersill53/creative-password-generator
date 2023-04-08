/* password rules*/
var characterLength = 10;
var choiceUser = [];

/* Adding variables for password */
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '~', '?', '>', ';', '<', '/', '=', '|'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

function getPrompts() {
  characterLength = parseInt(prompt("Hello user, how many characters do you require your password to be? (8 - 128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert ("Character has to be a number with a digit from 8 to 128. Please try again.");
    return false;
  }

  if (confirm("User, would you like lowercase letters in your password?")) {
    choiceUser = choiceUser.concat(lowerCase);
  }
  
  if (confirm("User, would you like special characters in your password?")) {
    choiceUser = choiceUser.concat(specialCharacters);
  }
  
  if (confirm("User, would you like uppercase letters in your password?")) {
    choiceUser = choiceUser.concat(upperCase);
  }
  
  if (confirm("User, would you like numbers in your password?")) {
    choiceUser = choiceUser.concat(number);
  }
  
  return true;

}