/*
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
*/

const validParentheses = (parens) => {
  // It must be even number
  // Determine the length of string
  const length = parens.length
  if (length % 2 !== 0) return false

  // Create and stack
  const stack = []
  // Generate all the closing brackets
  const bracketMapping = {
    '}': '{',
    ')': '(',
    ']': '[',
  }
  // iterate over the string
  for (let s of parens) {
    // Look for a closing bracket
    if (bracketMapping[s]) {
      // take the last element of the array and compare it with curren paren
      if (stack.length === 0 || stack.pop() != bracketMapping[s]) {
        return false
      }
    } else {
      stack.push(s)
    }
  }

  return stack.length === 0
}

console.log(validParentheses('(('))