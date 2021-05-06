// special char array
var specialChars = ["#", "!", "@"];

// number array
var numbArray= ["1", "2"];

// lower case array
var lowerCase= ["a", "b"];

// uppercase array- .split is not working?
var upperCase= ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'].split('');

// funct to prompt user for password options
function getPassword(){
  // create var to store length of password
  var length = parseInt (
    prompt("How many characters would you like your password to be")
  );

  // create conditional statement to check if password length is a num
  if(Number.isNaN(length)) {
    alert("password must be a number")
    return null;
  };

  // cond state to check if pswd is atleast 8 char
  if (length < 8) {
    alert("password length must be atleast 8 characters")
    return null;
  };
  
  // conditional statement to check if pswd length is atleas 128 characters
  if (length > 128) {
    alert("password can not contain more than 128 characters")
    return null;
  };
  // create confirmation prompts for types of characters the user wants to use

  // create conditional statement to ensure user clicks one of the character types

  // create an object to store user input
    var possiblePass = {
      // store lenth & all characters selected by user
      length: length, 
      specialChars: specialChars,
      numbArray: numbArray,
      lowerCase: lowerCase,
      upperCase: upperCase,
    }

    return possiblePass;
}

// create function for getting random element from array
  function getRandomLetters(arr) {
    var random =     //come kind of math problem arr.length
    // save to a variable (r,p,s)
    var rand = arr[random]   // future research: get 1 of each character, no repeats

    return rand;
  }

// create fuction to generate passwork w. user input
function generatingPassword() {
  // set a variable to call my getPassword function
  var options = getPassword();

  // variable to store the password as it is being concatenated 
  var passResult = [];

  // create variable to store types of characters to include in password
  var possibleChars = [];

  // create variable to store ea.trype of garentied characters
  var guarChars = [];

  // condition that adds array for special characters into the arrya of possible characters based on user input
  
  
  // push new random characters into gaurenteed characters
  if (options.specialChars) {
    possibleChars = possibleChars.concat(specialChars);
    guarChars.push(getRandomLetters(specialChars))
  }
  // create for loop to iterate over password length from the options object
  for (var i=0; i < options.length; i++) {
    var possibleCharacter = getRandomLetters(possibleCharacter);
  
    passResult.push(possibleCharacter)
  }

  return passResult.join('');
}


//  Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
