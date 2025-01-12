/**
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 * 
 */

const longestCommonPrefix = (arrStr) => {
  // If the array is empty
  if (arrStr.length === 0) return 0;

  // if there is only one string
  if (arrStr.length === 1) return arrStr[0];

  // find the shortest string in the array
  // const shortestWord = arrStr.reduce((shortest, current) =>
  //   current.length < shortest.length ? current : shortest
  // );

  const minLength = Math.min(...arrStr.map((word) => word.length));
  console.log(minLength);

  let prefix = "";
  // This is so we do no go past 4 char that is smallest word
  for (let i = 0; i <= minLength; i++) {
    // Get reference character from first word
    const char = arrStr[0][i];

    for (let j = 1; j < arrStr.length; j++) {
      const myVar = arrStr[j][i];
      if (arrStr[j][i] !== char) {
        // If mismatch found, return what we have so far
        return prefix;
      }
    }
    prefix = prefix + char;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
