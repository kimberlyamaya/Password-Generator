// Character Types //

// With all criteria being TRUE
// uppers, lowers, numeric, special chars, characterType1
var characterType1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@^_{|}~";


// Without special chars
// uppers, lowers, numeric, characterType2
var characterType2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// uppers, lowers, characterType3
var characterType3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// uppers, numeric, characterType4
var characterType4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// lowers, numeric, characterType5
var characterType5 = "abcdefghijklmnopqrstuvwxyz0123456789";


// Without numeric
// uppers, lower, special chars, characterType6
var characterType6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@^_{|}~";

// uppers, lower, REPEAT - DO NOT CODE FOR

// uppers, special chars, characterType7
var characterType7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@^_{|}~";

// lowers, special chars, characterType8
var characterType8 = "abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@^_{|}~";


// Without lower
// uppers, numeric, special chars, characterType9
var characterType9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&()*+,-./:;<=>?@^_{|}~";

// uppers, numeric, REPEAT - DO NOT CODE FOR

// uppers, special chars, REPEAT - DO NOT CODE FOR

// numeric, special chars, characterType10
var characterType10 = "0123456789#$%&()*+,-./:;<=>?@^_{|}~";


// Without uppers
// lower, numeric, special chars, characterType11
var characterType11 = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@^_{|}~";

// lower, numeric, REPEAT - DO NOT CODE FOR

// lower, special chars, REPEAT - DO NOT CODE FOR

// numeric, special chars, REPEAT DO NOT CODE FOR

// Character Types - END //




// prompt for info function //

var promptForPasswordLength = function () {
  var passwordCriteriaLengthPrompt = "";
  //var passwordCriteriaLengthPrompt = parseInt(window.prompt("Enter the length of your password, must be between 8 and 125 characters."));
  var passwordCriteriaLengthPrompt = window.prompt("Enter the length of your password, must be between 8 and 125 characters.");
  if (passwordCriteriaLengthPrompt > 125) {
    window.prompt("You cannot enter a value that exceeds 125, please try again.");
    promptForPasswordLength();
  } else if (passwordCriteriaLengthPrompt < 8) {
    window.prompt("You cannot enter a value that is less than 8, please try again.");
    promptForPasswordLength();
  } else if (passwordCriteriaLengthPrompt === null) {
    window.prompt("You must enter a valid number, please try again.");
    promptForPasswordLength();
  }
    return passwordCriteriaLengthPrompt;
  }
// need to remove this console log bc it prompts for password length BEFORE the button is pressed!
console.log(promptForPasswordLength());

// prompt for info function - END //


// generate password function //

var generatePassword = function() {
  // setting the length based on the prompt
  var length = promptForPasswordLength();

  var passwordCriteriaUpperCase = window.confirm("Include uppercase letters in your password?");
  //console.log(passwordCriteriaUpperCase);

  var passwordCriteriaLowerCase = window.confirm("Include lowercase letters in your password?");
  //console.log(passwordCriteriaLowerCase);

  var passwordCriteriaNumeric = window.confirm("Include numbers in your password?");
  //console.log(passwordCriteriaNumeric);

  var passwordCriteriaSpeicalChars = window.confirm("Include special characters in your password?");
  //console.log(passwordCriteriaSpeicalChars);

  // calling the character types based on window prompts //

  // uppers, lowers, numeric, characterType1
  if (passwordCriteriaUpperCase === true && passwordCriteriaLowerCase === true && passwordCriteriaNumeric === true && passwordCriteriaSpeicalChars === true) {
    charset = characterType1;
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  // uppers, lowers, numeric, characterType2
  else if (passwordCriteriaUpperCase === true && passwordCriteriaLowerCase === true && passwordCriteriaNumeric === true && passwordCriteriaSpeicalChars === false) {
    charset = characterType2;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;  
  }
  // uppers, lowers, characterType3
  else if (passwordCriteriaUpperCase === true && passwordCriteriaLowerCase === true && passwordCriteriaNumeric === false && passwordCriteriaSpeicalChars === false){
    charset = characterType3;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // uppers, numberic, characterType4
  else if (passwordCriteriaUpperCase === true && passwordCriteriaLowerCase === false && passwordCriteriaNumeric === true && passwordCriteriaSpeicalChars === false) {
    charset = characterType4;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // lowers, numeric, characterType5
  else if (passwordCriteriaUpperCase === false && passwordCriteriaLowerCase === true && passwordCriteriaNumeric === true && passwordCriteriaSpeicalChars === false) {
    charset = characterType5;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // uppers, lower, special chars, characterType6
  else if (passwordCriteriaUpperCase === true && passwordCriteriaLowerCase === true && passwordCriteriaNumeric === false && passwordCriteriaSpeicalChars === true) {
    charset = characterType6;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // uppers, special chars, characterType7
  else if (passwordCriteriaUpperCase === true && passwordCriteriaLowerCase === false && passwordCriteriaNumeric === false && passwordCriteriaSpeicalChars === true) {
    charset = characterType7;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // lowers, special chars, characterType8
  else if (passwordCriteriaUpperCase === false && passwordCriteriaLowerCase === true && passwordCriteriaNumeric === false && passwordCriteriaSpeicalChars === true) {
    charset = characterType8;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // uppers, numeric, special chars, characterType9
  else if (passwordCriteriaUpperCase === true && passwordCriteriaLowerCase === false && passwordCriteriaNumeric === true && passwordCriteriaSpeicalChars === true) {
    charset = characterType9;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // numeric, special chars. characterType10
  else if (passwordCriteriaUpperCase === false && passwordCriteriaLowerCase === false && passwordCriteriaNumeric === true && passwordCriteriaSpeicalChars === true) {
    charset = characterType10;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
  // lowers, numeric, special chars. characterType11
  else if (passwordCriteriaUpperCase === false && passwordCriteriaLowerCase === true && passwordCriteriaNumeric === true && passwordCriteriaSpeicalChars === true) {
    charset = characterType11;
    retVal = "";
    for (var i= 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; 
  }
}
// generate password function - END //


// starter code //

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


// starter code - END //

