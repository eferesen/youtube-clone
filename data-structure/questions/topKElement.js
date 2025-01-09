/**
 * 
 * Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]

 * 
 */



const topKElement = (nums, k) => {

  const collection = {}

  // Fill the collection array with the freq
  // O(n)
  for (let num of nums) {
    if (!collection[num]) {
      collection[num] = 1
    } else {
      collection[num] = collection[num] + 1
    }
  }

  const freqPairs = Object.entries(collection) // O(m)

  // We have pairs [ [ '1', 4 ], [ '2', 2 ], [ '3', 3 ] ]
  freqPairs.sort((a, b) => b[1] - a[1]) // JS sort O(n + m Log(n))

  const kSizeArr = freqPairs.slice(0, 2) // O(k) k is the input param
  console.log(kSizeArr)

  return kSizeArr.map(pair => parseInt(pair[0])) // O(n log n)



}

console.log(topKElement([1, 1, 1, 1, 2, 2, 3, 3, 3], 2))
// console.log(topKElement([7], 2))