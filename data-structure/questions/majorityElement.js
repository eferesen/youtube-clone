
const majorityElement = (nums) => {
  let majority
  // Store it some where
  const store = {}

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i].toString()
    if (!Object.prototype.hasOwnProperty.call(store, value)) {
      store[value] = 1
    } else {
      store[value] = store[value] + 1
    }
  };
  console.log(`Store ${JSON.stringify(store)}`)
  /**
   * In a reduce operation, if no initial value is provided, the first element of the array automatically becomes the initial value (accumulator), and the reduction starts from the second element.
   */
  const numberCountPairs = Object.entries(store)

  const mostFrequentPair = numberCountPairs.reduce((highestPair, currentPair) => {
    const [_, highestCount] = highestPair
    const [__, currentCount] = currentPair

    return highestCount > currentCount ? highestPair : currentPair
  }, numberCountPairs[0])

  majority = mostFrequentPair[0]

  return parseInt(majority);
}

/*

1. If there is a majority element, it will always be left as the candidate after all cancellations.
2. When we see the candidate element, we increment the count
3. When we see a different element, we decrement the count
4. When count reaches 0, we pick a new candidate
*/




const majorityElement2 = (nums) => {
  let candidate = null  // Stores our potential majority element
  let count = 0        // Keeps track of the count

  for (let num of nums) {
    // If count is 0, we pick a new candidate
    if (count === 0) {
      candidate = num
    }
    // If we see our candidate, increment count
    if (candidate === num) {
      count += 1
    } else {
      // If we see a different number, decrement count
      count -= 1
    }
  }
  return candidate
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3]))
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3]))

