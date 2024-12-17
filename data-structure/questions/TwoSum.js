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
}

const twoSum2 = (nums, target) => {

  const mapper = new Map()

  for (let ind = 0; ind < nums.length; ind++) {
    const diff = target - nums[ind]

    if (mapper.has(diff)) {
      return [mapper.get(diff), ind]
    }

    mapper.set(nums[ind], ind)
  }

}

// console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum2([2, 7, 11, 15], 9))