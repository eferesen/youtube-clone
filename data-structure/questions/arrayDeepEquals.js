

const deepEquals = (arr1, arr2) => {

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false

  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      // Call recursively
      if (!Array.isArray(arr2[i]) || !deepEquals(arr1[i], arr2[i])) return false
      continue
    }

    if (arr1[i] !== arr2[i]) return false
  }

  return true
}

console.log(deepEquals([1, [2, 3]], [1, [2, 3]])) // Should return true
console.log(deepEquals([1, [2, 3]], [1, [2, 4]])) // Should return false
console.log(deepEquals([1, [2, [3]]], [1, [2, [3]]])) // Should return true