// Assignment code here

//define function for ensuring password length is between 8 and 125

//do I use a loop to through this criteria?

//need to create functions for confirms() to each question asked below

//how to tie all of this to that button down there??


//////////////////////// serious of prompts for password criteria ///////////////////////////////

var passwordCriteriaLengthPrompt = window.prompt("Enter the length of your password, must be between 8 and 125 characters.");
// if (passwordLengthPrompt.length >= 125) {
  //run a function;
  //else run the fuction that will call the passwordLengthPrompt again;
//}
console.log(passwordCriteriaLengthPrompt);

var passwordCriteriaLowerCase = window.confirm("Include lowercase letters in your password?");
//add some logic if confirmed then add lower case letters to password
console.log(passwordCriteriaLowerCase);

var passwordCriteriaUpperCase = window.confirm("Include uppercase letters in your password?");
//add some logic if confirmed then add upper case letters to password
console.log(passwordCriteriaUpperCase);

var passwordCriteriaNumeric = window.confirm("Include numbers in your password?");
//add some logic if confirmed then add numbers to password
console.log(passwordCriteriaNumeric);

var passwordCriteriaSpeicalChars = window.confirm("Include special characters in your password?");
//add some logic if confirmed then add special chars to password
console.log(passwordCriteriaSpeicalChars);



//////////////////////// starter code ///////////////////////////////


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

