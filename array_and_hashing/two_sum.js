//my solution brute force

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let numsLength = nums.length;
    for (let i = 0; i < numsLength; i++) {
      let currentNumber = nums[i];

      for (let j = 0; j < numsLength; j++) {
        if (i === j) {
          continue;
        } else if (i !== j) {
          if (nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }
    }
  }
}

// my improved solution

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let numsLength = nums.length;
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];

      if (map.has(complement)) {
        return [i, map.get(complement)];
      } else {
        map.set(nums[i], i);
      }
    }
  }
}
