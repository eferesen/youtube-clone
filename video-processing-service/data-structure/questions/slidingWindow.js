/*
  Sliding Window
  Given a string s, find the length of the longest substring without duplicate characters.A substring is a contiguous sequence of characters within a string
  
  Variable Length - Solution
Input =  `abcabcbb` 
Output = 3

*/

const slidingWindow = (str) => {
  let longest = 0
  const sett = new Set()
  let left = 0
  for (let right = 0; right < str.length; right++) {
    const value = str[right]
    // Let check if value is in the set
    while (sett.has(value)) {
      sett.delete(str[left])
      left++
    }

    let w = (right - left) + 1
    longest = Math.max(longest, w)
    sett.add(value)

  }

  return longest
}

console.log(slidingWindow('abcabcbb'))