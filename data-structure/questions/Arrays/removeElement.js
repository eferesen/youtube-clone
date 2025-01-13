/**
 * 
 * 
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 */

const removeElement = (nums, val) => {

  let left = 0
  for (let right = 0; right < nums.length; right++) {
    const currentRight = nums[right]
    if (nums[right] !== val) {
      nums[left] = nums[right]
      left++
    }
  }
  console.log(nums)
  return left
}


console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))