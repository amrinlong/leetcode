/*
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
    let obj = {}
    let results = []

    for (let i = 0; i < nums.length; i++) {
        for (let key in obj) {
            if (!obj[nums[i]]) {
                console.log(obj[nums[i]] = nums[i])
                console.log(obj.values[num[i]])
            } 
        }
    }

    //return
};

