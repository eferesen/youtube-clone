/**
 * 
 * We start the sliding window with
 *  Left
 *  Right
 * 
 *  Length of the window is (left + right) + 1
 */

/**
 * 
 * @param {*} s 
 * @param {*} k 
 */

const longestRepeatingCharacter = (s, k) => {
  // Initialize result and character frequency map
  let res = 0;
  let charCount = {};
  let left = 0;
  let maxFreq = 0;

  // Iterate through the string with right pointer
  for (let right = 0; right < s.length; right++) {

    const sRight = s[right]
    // Count frequency of characters in current window
    charCount[s[right]] = (charCount[s[right]] || 0) + 1;

    // Track the count of the most frequent character
    maxFreq = Math.max(maxFreq, charCount[s[right]]);

    // Current window size - count of most frequent char = chars to replace
    // If this is greater than k, shrink window
    while ((right - left + 1) - maxFreq > k) {
      charCount[s[left]]--;
      left++;
    }

    // Update result with current valid window size
    res = Math.max(res, right - left + 1);
  }

  return res;

}

console(longestRepeatingCharacter('ABABBA', 2))