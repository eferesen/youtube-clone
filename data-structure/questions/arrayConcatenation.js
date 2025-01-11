

const arrayConcat = (nums) => {

  // Simple solution

  // return [...arr, ...arr]

  // const finalArray = []
  // for (let num in nums) {
  //   nums.push(parseInt(nums[num]))
  // }
  const finalArray = []
  for (let i = 0; i < 2; i++) {
    for (let num of nums) {
      finalArray.push(num)
    }
  }

  return finalArray

}

console.log(arrayConcat([1, 2, 3]))