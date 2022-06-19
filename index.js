function isPalindrome(word) {
  // Write your algorithm here
  let array = word.split("")
  let reversedArray = array.reverse()
  let reversedWord = reversedArray.join("")
  if (word == reversedWord){
    return true;
  } else {
    return false;
  }
}
isPalindrome('abba')
isPalindrome('racecar')
//  return word.split("").reverse().join("");

// } 

// function isPalindrome(word) {
//   const reversed = reverseString(word);
//   return word === reversed;
// }



/* 
  Add your pseudocode here
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
  
*/

/*
  Add written explanation of your solution here
Takes the param and checks whether its parindrome in both ways.
returns false if otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
