
function isPalindrome(word) {
  const reverseStr = reversingAString(word);
  if(word === reverseStr){
    return true
  } else {
    return false
  }
}

function reversingAString(word){
  let newString = '';
  for(let i = word.length - 1; i >= 0; i--){
    newString += word[i]
  }
  return newString;
}


/* 
  Add your pseudocode here
*/
//reverse a sting
//compare if the original string is equal to the reversed string
// if equal return true, else return false
/*
  Add written explanation of your solution here
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wow"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("code"));
}

module.exports = isPalindrome;