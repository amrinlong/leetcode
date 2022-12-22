/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                return [i, j]
            }
        }
    }
};

const arrOfNums = [2,7,11,15] // expected [0, 1]
const targetNum = 9

console.log(twoSum(arrOfNums, targetNum))
