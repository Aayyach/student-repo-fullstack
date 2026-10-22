/** Exercise 02 - Two Sum

Problem:

You are given an array of integers 'nums' and an integer 'target', write a function that returns indices of the two 
numbers such that they add up to target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

**/

function twoSum(nums, target) {
  let len = nums.length - 1;
  let arr = [];

  for (let i = 0; i <= len; ++i) {
    for (let j = 1; j <= len; ++j) {
      if (nums[i] + nums[j] === target) {
        arr.push(i);
        arr.push(j);
        return arr;
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
