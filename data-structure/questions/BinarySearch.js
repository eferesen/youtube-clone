
const BinarySearch = (nums, target) => {

  // Set the left index
  const leftIndex = 0
  // Set the right index
  const rightIndex = nums.length - 1

  while (leftIndex <= rightIndex) {
    const midpointIndex = (leftIndex + right) / 2

    if (nums[midpointIndex] > target) {
      rightIndex = midpointIndex - 1
    } else if (nums[midpointIndex] < target) {
      leftIndex = midpointIndex + 1
    } else {
      return midpointIndex
    }
  }
  return -1
}

console.log(BinarySearch([1, 2, 4, 5, 7, 9], 5))