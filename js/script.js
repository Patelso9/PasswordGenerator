// special char array
var specialChars = ["#", "!", "@"];

// number array
var numbArray= ["1", "2"];

// lower case array
var lowerCase= ["a", "b"];

// uppercase array
var upperCase= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"].split();

// funct to prompt user for password options
function getPassword(){
  // create var to store length of password
  var length = parseInt {
    prompt("How many characters would you like your password to be");
  };

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

  // 

}


/ Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
