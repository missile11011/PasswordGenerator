// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,z,y,z";
  var numbers = "0,1,2,3,4,5,6,7,8,9";
  var special = "!,@,#,$,%,^,&,*";
  var uppper = letters.toUpperCase();
  let length = window.prompt("Enter password length:");
  let char = letters;
  if (window.confirm("Do you want numbers inside the password")) {
    char = char.concat("," + numbers);
  }
  if (window.confirm("Do you want uppercase letters in the password")) {
    char = char.concat("," + uppper)
  }
  if (window.confirm("Do you want specail charaters in the password")) {
    char = char.concat("," + special);
  }
  let x = char.split(",");
  let arr = [];
  for (let i = 0; i < parseInt(length); i++) {
    random = Math.floor(Math.random() * x.length)
    arr.unshift(x[random])
  }
  result = arr.join("");
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
