
const containsDuplicate = (nums) => {

  const store = {}

  for (let num of nums) {
    if (store[num]) {
      store[num] = store[num] + 1
      return false
    } else {
      store[num] = 1
    }
  }
  return true
}

console.log(containsDuplicate([1, 2, 1, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))