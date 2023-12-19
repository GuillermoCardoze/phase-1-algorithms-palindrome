function reverse(word){
  // const wordArray = word.split("")
  // const reversedWordArray = wordArray.reverse()
  // const reversedWord = reversedWordArray.join("")
  // return reversedWord;
  return word.split("").reverse().join("");
}


function isPalindrome(word) {
  
  // Write your algorithm here
  const reversedWord = reverse(word)

  return word === reversedWord;
}

/* 
  Add your pseudocode here
  write a function ,isPalindrome, 
  comes back true if the word is the same as it is in reverse

  
*/

/*
  Add written explanation of your solution here
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
