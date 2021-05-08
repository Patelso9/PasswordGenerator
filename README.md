# PasswordGenerator

Password generator created in Javascript

## Contects of project

This project contains an index.html file, script.js file, and style.css file. To preview the project, click the link next to the description.

## Links

Git URL: https://patelso9.github.io/PasswordGenerator/

Git Repository: https://github.com/Patelso9/PasswordGenerator

## User Story 

AS AN employee with access to sensitive data I WANT to randomly generate a password that meets certain criteria SO THAT I can create a strong password that provides greater security

## Acceptance Criteria 

GIVEN I need a new, secure password 
WHEN I click the button to generate a password 
THEN I am presented with a series of prompts for password criteria 
WHEN prompted for password criteria 
THEN I select which criteria to include in the password 
WHEN prompted for the length of the password 
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password 
THEN I choose lowercase, uppercase, numeric, and/or special characters 
WHEN I answer each prompt 
THEN my input should be validated and at least one character type should be selected 
WHEN all prompts are answered 
THEN a password is generated that matches the selected criteria 
WHEN the password is generated 
THEN the password is either displayed in an alert or written to the page

## Satisfying the Acceptance Criteria

When clicking the button generated in HTML, it will trigger pop up windows to generate a password.

A series of prompts are generated to select number of characters and what kind of characters will be included in the password. 

If no number, or a number larger than 128 / smaller than 8 characters was selected for the 1st prompt, a prompt will ask the user to input another number within the criteria. 

If no characters were confirmed, the user will be prompted again to select types of characters. 

4 character arrays were created to include: special characters, numbers, uppercase letters, and lowercase letters. 

A loop is run for length of password to generate 2 random numbers. The 1st random number chooses character a character in the array and the 2nd random number chooses a character from that selected array. The selection is then concatenated into a password string. 

The password string is then printed into the HTML box. 


## Future Developments

Style can be updated to be more inviting. 
Another button can be created to to add or coppy contects onto a clipboard. 