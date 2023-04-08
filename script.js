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
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
//will generate password if the values in correct prompts are true.
  if(correctPrompts) {
  var passwordGen = generatePassword();
  
//if anything is false this will return an empty line
  passwordText.value = passwordGen;
  } else {
    passwordText.value = "";
  }

}
//used basic for loop structure because everyting else confused me
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++){
    var randomSelector = Math.floor(Math.random() * choiceUser.length)
    password = password + choiceUser[randomSelector];
  }
  return password;

}
//prompts user with choices for what they want in their password
function getPrompts() {
  choiceUser = [];
  characterLength = parseInt(prompt("Hello user, how many characters do you require your password to be? (8 - 128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert ("ah ah ah You didn't say the magic word");
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
    choiceUser = choiceUser.concat(numbers);
  }
  
  return true;

}