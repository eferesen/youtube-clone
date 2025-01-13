/*
  Sliding Window
  Given a string s, find the length of the longest substring without duplicate characters.
  A substring is a contiguous sequence of characters within a string
  
  Variable Length - Solution
Input =  `abcabcbb` 
Output = 3

*/

const longestSubstringNoDupes = (s) => {
  // Edge case
  if (s.length <= 1) return s.length;

  let longest = 0;
  let left = 0;
  const seen = new Map();  // Using Map to store char -> index

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If we've seen this char and its index is >= left pointer
    if (seen.has(currentChar) && seen.get(currentChar) >= left) {
      left = seen.get(currentChar) + 1;
    }

    // Update longest window size
    longest = Math.max(longest, right - left + 1);

    // Update char position in map
    seen.set(currentChar, right);
  }

  return longest;
}

console.log(longestSubstringNoDupes('abcabcbb'))