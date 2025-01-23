

const minimumSizeSubArray = (nums, target) => {

  let summ = 0;
  let minLength = Infinity;
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    // calculate a sum
    summ += nums[right]
    // the sum is greater than equal to the target
    while (summ >= target) {
      // Caculate minValue
      minLength = Math.min(minLength, right - left + 1)
      // remove left index value from sum
      summ -= nums[left]

      //Adavance left index
      left++
    }
    // Check for if never satisfies the while loop

    return minLength === Infinity ? 0 : minLength
  }


}


console.log(minimumSizeSubArray([2, 3, 1, 2, 4, 3], 7))


