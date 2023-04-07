/* password rules*/
var characterLength = 10;
var choiceUser = [];

/* Adding variables for password */
var lowercase = [ ];
var upercase = [ ];
var numbers = [ ];
var specialcharacters = [ ];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
