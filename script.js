var uppercase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specials = "! /@/ # % ^ & * ( ) _ + = - : ; { [ } ] ' ? / > . < , ~ ";
var results = ""
var passwordlength = ""

function generatePassword(passwordLength) {
  window.confirm("Please follow the prompts, I will generate a password for you.");
  if (confirm);
  else (window.alert("ok, thank you! please return when you're ready to generate your password."));


  var passwordLength =
    window.prompt("Please type a number between 8 and 126! this will set how long you want the password to be at the least ")

  if (8 > passwordLength || passwordLength > 126 || passwordLength === "" || passwordLength === null) {
    window.alert("hey!! a number between 8-126! stop playing!!")
    return generatePassword();
  };
  console.log(passwordLength);
  //choose lowercase case letters

  var lowercaseConfirm = window.confirm("would you like to have lowercase letters in your password");
  if (lowercaseConfirm) { results = results + lowercase };
  console.log(lowercase);

  // choose uppercase
  var uppercaseConfirm = window.confirm("would you like to have uppercase letters in your password");
  if (uppercaseConfirm) { results = results + uppercase };
  console.log(uppercase);

  //choose specials
  var specialsConfirm = window.confirm("would you like to have special characters in your password");
  if (specialsConfirm) { results = results + specials };
  console.log(specials);
  //choose numbers


  var numbersConfirm = window.confirm("would you like to have numbers in your password");
  if (numbersConfirm ) { results = results + numbers };
  console.log(numbers);

  //password  is made fingers crossed!

  var password = ""
  for (var i = 0; i < parseInt(passwordLength); i++) {
    var randomPassword = results[Math.floor(Math.random() * results.length)];
    password = password + randomPassword;
  }


  return password;
};





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
