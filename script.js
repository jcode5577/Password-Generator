// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays for potential character choices
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var characters=['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCase=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Create Prompts to ask user password criteria/ made a statement so that password criteria is met.
  function questions() {
  var isValid = false;
  do {
  var length = prompt("Please select a password length between 8 and 128.");
  var askNumbers= confirm("Do you wish to include any numbers?");
  var askCharacters =confirm("Do you want to include and special characters?");
  var askLowerCase = confirm("Do you want to include any lower case letters?");
  var askUpperCase = confirm ("Do you want to include any upper case letters?");
  var responses = {
  length: length,
  askNumbers: askNumbers,
  askLowerCase: askLowerCase,
  askUpperCase: askUpperCase,
  askSpecial: askCharacters,
} 
  if((length < 8)||(length > 128))
  alert("Please select a password length between 8 and 128.")
  else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askCharacters))
  alert("Please choose atleast one type ie Upper case, Lower case, Number, Character.")
    else
  isValid= true;

  } while(!isValid);
return responses;
}
// This function joins all the user responses and then creates the result
function generatePassword() {
  var passwordOptions= questions();
  var passwordCombo= [];
  var finalPassword = "";

  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      passwordCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      passwordCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      passwordCombo.push(i);
  }
  if (passwordOptions.askCharacters) {
    for (var i of special)
      passwordCombo.push(i);
  }


  console.log(passwordCombo);


  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 