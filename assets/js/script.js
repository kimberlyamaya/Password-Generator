// Assignment code here

//define function for ensuring password length is between 8 and 125

//do I use a loop to through this criteria?

//need to create functions for confirms() to each question asked below

//how to tie all of this to that button down there??

//Need to accomplish character types based on password critera

//add some logic for character types, am I going to allow all of one data type? All uppers, all lowers, etc?

///////////////////////// Character Types /////////////////////////////////

// With all criteria being TRUE
// uppers, lowers, numeric, special chars, characterType1
var characterType1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@^_{|}~";


// Without special chars
// uppers, lowers, numeric, characterType2
var characterType2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// uppers, lowers, characterType3
var characterType3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// uppers, numberic, characterType4
var characterType4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// lowers, numeric, characterType5
var characterType5 = "abcdefghijklmnopqrstuvwxyz0123456789";


// Without numeric
// uppers, lower, special chars, characterType6


// uppers, lower, REPEAT - DO NOT CODE FOR


// uppers, special chars, characterType7


// lowers, special chars, characterType8


// Without lower
// uppers, numeric, special chars, characterType9


// uppers, numeric, characterType10


// uppers, special chars, characterType11


// numeric, special chars, characterType12


// Without uppers
// lower, numeric, special chars, characterType13


// lower, numeric, characterType14


// lower, special chars, characterType 15


// numeric, special chars, REPEAT DO NOT CODE FOR




//////////////////////// serious of prompts for password criteria ///////////////////////////////

var passwordCriteriaLengthPrompt = window.prompt("Enter the length of your password, must be between 8 and 125 characters.");
// if (passwordLengthPrompt.length >= 125) {
  //run a function;
  //else run the fuction that will call the passwordLengthPrompt again;
//}
console.log(passwordCriteriaLengthPrompt);

var passwordCriteriaUpperCase = window.confirm("Include uppercase letters in your password?");
//add some logic if confirmed then add upper case letters to password
console.log(passwordCriteriaUpperCase);

var passwordCriteriaLowerCase = window.confirm("Include lowercase letters in your password?");
//add some logic if confirmed then add lower case letters to password
console.log(passwordCriteriaLowerCase);

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


//////////////////////// END starter code ///////////////////////////////

function generatePassword() {
  // setting the length based on the prompt
  var length = passwordCriteriaLengthPrompt;

  // uppers, lowers, numeric, characterType1
  if (passwordCriteriaUpperCase && passwordCriteriaLowerCase && passwordCriteriaNumeric && passwordCriteriaSpeicalChars) {
    charset = characterType1;
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  // uppers, lowers, numeric, characterType2
  else if (passwordCriteriaUpperCase && passwordCriteriaLowerCase && passwordCriteriaNumeric) {
    charset = characterType2;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;  
  }
  // uppers, lowers, characterType3
  else if (passwordCriteriaUpperCase && passwordCriteriaLowerCase) {
    charset = characterType3;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // uppers, numberic, characterType4
  else if (passwordCriteriaUpperCase && passwordCriteriaNumeric) {
    charset = characterType4;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // lowers, numeric, characterType5
  else if (passwordCriteriaLowerCase && passwordCriteriaNumeric) {
    charset = characterType5;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  
}

generatePassword();
console.log(generatePassword());