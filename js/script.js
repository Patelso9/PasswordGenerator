// Variables for all characters
var passArray = [];
var specialChars = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
var numbArray= ["1","2","3","4","5","6","7","8","9","0"];
var lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];

//  Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  
  var passwordString = "";
  
  // create var to store length of password
  var passwordLength = parseInt (
    prompt("How many characters would you like your password to be? \nMust be longer tha 8 characters or shorter than 128 characters ")
  );
  
  // create conditional statement to check if password length is a num
  if(Number.isNaN(passwordLength)) {
    alert("password must be a number")
    return null;
  };
  
    // cond state to check if pswd is atleast 8 char
  if (passwordLength < 8) {
    alert("password length must be atleast 8 characters")
    return null;
  };
  
    // conditional statement to check if pswd length is atleas 128 characters
  if (passwordLength > 128) {
    alert("password can not contain more than 128 characters")
    return null;
  };
  
  
  // create confirmation prompts for types of characters the user wants to use
    var useChar = window.confirm("Do you want special characters?");
    var useNumb = window.confirm("Do you want numbers?");
    var useLowerCase = window.confirm("Do you want lowercase leters?");
    var useUpperCase = window.confirm("Do you want upper case letters?"); 

    // create conditional statement to ensure user clicks one of the character types
    if (useLowerCase == false && useUpperCase == false && useNumb == false && useChar == false) {
      alert("Please select one type of character");
      useChar = window.confirm("Do you want special characters?");
      useNumb = window.confirm("Do you want numbers?");
      useLowerCase = window.confirm("Do you want lowercase leters?");
      useUpperCase = window.confirm("Do you want upper case letters?");
    }
  
    // if character type selected, store array into group
    if (useChar==true){passArray.push(specialChars)};
    if (useNumb==true){passArray.push(numbArray);}
    if (useLowerCase==true){passArray.push(lowerCase);}
    if (useUpperCase==true){passArray.push(upperCase)}
    
    // loop to run the length of password
    for(let i=0;i<passwordLength;i++){

      // passArray = [ [a, b, c], [1, 2, 3] ]
      // randomCharArrayNum = 0
      // selectedCharArray = [a, b, c]
      
      // generate random number for group array
      var randomCharArrayNum;
      randomCharArrayNum= parseInt(Math.floor(Math.random()*passArray.length)); 
      
      //variable that stores selected array from case array
      var selectedCharArray;
      selectedCharArray=passArray[randomCharArrayNum]; 
  
       
        console.log("The array has " + passArray.length + " entries"); //testing length of caseArray
        console.log(randomCharArrayNum); //testing random number generated based on length of caseArray
      
      // a generate random number for the character array (length of character array)
      var randomCharNum;
      randomCharNum=Math.floor(Math.random()*selectedCharArray.length);
      
      console.log("Your random character array num is " + randomCharArrayNum + " and your random character number is " + randomCharNum);
  
      // selectedCharArray = ['a', 'b', 'c']
      // randomCharNum = 1
      // concat string
      var randomChar;
      randomChar= selectedCharArray[randomCharNum];
      passwordString+=randomChar;
    }
  
    return passwordString;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

