/**
 * 
 * Length of last word
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
 */

const lengthOfLastWord = (str) => {
  const words = str.split(" ").filter((word) => word !== "");

  return words[words.length - 1].length;
};

// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));

const lengthOfLastWord2 = (s) => {
  let count = 0;
  let foundChar = false;
  let currentChar;
  for (let i = s.length - 1; i >= 0; i--) {
    currentChar = s[i];
    // This only happens when we have space
    // With space we continue with loop
    // We read chars
    // Now foundChar is set to true
    // If we see a space we exit the loop
    // return the count
    if (s[i] === " ") {
      if (foundChar) {
        break;
      }
      continue;
    }
    foundChar = true;
    count++;
  }
  return count;
};

// console.log(lengthOfLastWord2("Hello World"));
console.log(lengthOfLastWord2("   fly me   to   the moon  "));
// console.log(lengthOfLastWord2("luffy is still joyboy"));
