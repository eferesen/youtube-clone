

const deepEquals = (obj1, obj2) => {

  if (typeof obj1 !== typeof obj2) return false

  // Get Keys
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)

  if (obj1Keys.length !== obj2Keys.length) return false

  for (let i = 0; i < obj1Keys.length; i++) {
    const obj1Key = obj1Keys[i]
    const obj2Key = obj2Keys[i]
    const obj1Value = obj1[obj1Key]
    const obj2Value = obj2[obj2Key]
    //Check for key and value for each attribute
    // If value is an object do recursive call
    if (obj1Key !== obj2Key) return false
    if (obj1Value !== obj2Value) return false
    // Lets check to see if they are object
    if (typeof obj1Value === 'object' || typeof obj2Value === 'object') {

      if (typeof obj1Value !== 'object' || typeof obj2Value !== 'object') return false
      if (!deepEquals(obj1Value, obj2Value)) return false
      continue
    }
  }
  return true
}



// console.log(deepEquals({ a: 1 }, { a: 1 }))
// console.log(deepEquals({ a: 1 }, 'string'))
// console.log(deepEquals({ a: 1 }, { a: 1, b: 2 }))
console.log(deepEquals({ a: 1 }, { a: 2 }))
console.log(deepEquals({ a: 1 }, { b: 2 }))
