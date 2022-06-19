function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++){
    const j = word.length - 1 -i;
    // const startChar = word[i];
    // const endChar = word[j];
    if(word[i] !== word[j])return false;
  }
  return true
}

/* 
  Add your pseudocode here
function
iterate form begining to middle 
a a a a a a 6/2
i         j

a a a a a a 6/2
  i     j

a a a a a a 6/2
    i j


check each letter to corresponding letter form the end 
if match true, else false
*/

/*
  Add written explanation of your solution here
  write a function that return true if a word is palidrome
  if first letter is the same as the last letter and 
  the second letter is the same as the second last letter etc
  untill the middle 
  return true
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
