// Running sum one day array leet code Problem 1480

function runningSum(nums) {
  let output = []; // O(n)
  let currentSum = 0; // O(1)
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    output.push(currentSum);
  }

  return output;
}

// Only needs one loop - O(n) time complexity
