const wordPattern = (pattern, s) => {
  const words = s.split(' ')
  // Compare the length
  const patternLength = pattern.length
  const sLength = s.split(' ').length

  if (pattern.length !== words.length) return false

  const charToWord = {}
  const wordToChar = {}

  for (let i = 0; i <= pattern.length; i++) {

    const char = pattern[i]
    const word = words[i]

    if (!charToWord[char]) {
      if (wordToChar[word]) return false
      charToWord[i] = word
      wordToChar[word] = char
    } else if (charToWord[char] !== word) {
      return false
    }


    return true



  }

  console.log(mapping)

  return true

}

console.log(wordPattern('abba', 'dog cat cat dog'))
// console.log(wordPattern('aaaa', 'dog cat cat dog'))