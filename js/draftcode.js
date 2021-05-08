  
  // while loop to check for password length. If number less than 8 or over 128, or if input is a string or NaN, user is asked for input again
  var passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  
  while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
    alert("Please choose a number that is more than 8 and less than 128 characters");
    passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
} 
  
  // create var to store length of password
  var passlength = parseInt (
    prompt("How many characters would you like your password to be? \nMust be longer tha 8 characters or shorter than 128 characters ")
  );

    // create conditional statement to check if password length is a num
  if(Number.isNaN(passlength)) {
    alert("password must be a number")
    return null;
  };

    // cond state to check if pswd is atleast 8 char
  if (passlength < 8) {
    alert("password length must be atleast 8 characters")
    return null;
  };
  
    // conditional statement to check if pswd length is atleas 128 characters
  if (passlength > 128) {
    alert("password can not contain more than 128 characters")
    return null;
  };

  console.log(passlength.length);

// create function for getting random element from array
  function getRandomLetters(possiblePass) {
    // save to a variable (r,p,s)
    var rand = [];   // future research: get 1 of each character, no repeats

    for( var i = 0; i < length; i++){
      rand.push(possiblePass.stringArray(Math.floor(math.random()*length)))
    }
    
    console.log(getRandomLetters);
    return rand;
  }

// create fuction to generate passwork w. user input
function generatePassword() {
  // set a variable to call my getPassword function
  var options = getPassword();

  // variable to store the password as it is being concatenated 
  var passResult = getRandomLetters(options);

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




// funct to prompt user for password options
function getPassword(){
  
  
  generatePassword.textContent=passwordString; 

