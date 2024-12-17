const validAnagram = (s, t) => {

  if (s.length !== t.length) {
    return false
  }

  const sSet = new Set()  //O(N)
  const tSet = new Set()  //O(N)

  for (const letter in s) {
    sSet.add(s[letter])
    tSet.add(t[letter])
  }  // O(N)

  return [...sSet].every((value) => tSet.has(value)) //O(n)

}




const validAnagram2 = (s, t) => {

  if (s.length !== t.length) {
    return false
  }

  const charMap = {}

  for (let char of s) {
    charMap[char] = (charMap[char] || 0) + 1
  }

  for (let char of t) {
    if (!charMap[char]) return false
    charMap[char] = charMap[char] - 1
  }

  return true

}

// console.log(validAnagram('abccs', 'acbcss'))
console.log(validAnagram2('abccs', 'acbcss'))