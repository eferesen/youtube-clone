/**
 * Leet code problem 1672
 * Richest customer wealth
 * 
 * Time Complexity: O(n * m)
 * - where n is the number of customers (accounts.length)
 * - where m is the number of banks per customer (accounts[i].length)
 * - We need to iterate through each customer and for each customer, 
 *   we iterate through all their bank accounts
 * 
 * Space Complexity: O(1)
 * - We only use two variables (highestTotal and sum) regardless of input size
 * - No additional data structures are created that scale with input
 */

// accounts type accounts: number[][] 
// multidememsional array
// sample input [[1,2,3],[3,2,1]]
// sample input [[1,5], [7,3], [3,5]]

const maximumWealth = (accounts) => {

  let highestTotal = 0

  for (let i = 0; i < accounts.length; i++) {
    // accounts[i] is the array
    let sum = 0
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j]
    }

    highestTotal = Math.max(highestTotal, sum)
  }

  return highestTotal

}

// console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))