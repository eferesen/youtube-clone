

const subSequence = (s, t) => {
  // s = 'ace'
  // t = 'abcde'
  // make sure the length of t and s is the same

  // set sIndex to zero
  let sIndex = 0

  for (let i = 0; i < t.length && sIndex < s.length; i++) {
    // compare the values of S Index to the same t index
    if (t[i] === s[sIndex]) {
      // Update s index only if the condition holds
      sIndex++
    }
  }

  return s.length === sIndex

}

console.log(subSequence('ace', 'abcde'))