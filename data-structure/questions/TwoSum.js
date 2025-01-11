const twoSum = (nums, target) => {

  const result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {

      const sum = nums[i] + nums[j]
      if (sum === target) {
        return [i, j]
      }

    }
  }
  return result
}

const twoSum2 = (nums, target) => {

  // const mapper = new Map()

  // for (let ind = 0; ind < nums.length; ind++) {
  //   const diff = target - nums[ind]

  //   if (mapper.has(diff)) {
  //     return [mapper.get(diff), ind]
  //   }

  //   mapper.set(nums[ind], ind)
  // }

  const tracker = new Map()

  for (let num in nums) {
    // calculate the diff
    const diff = target - nums[num]

    if (tracker.has(diff)) {

      return [tracker.get(diff), num]
    }
    // In the map set the number and index value
    tracker.set(nums[num], num)
  }

}

// console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum2([2, 7, 11, 15], 9))