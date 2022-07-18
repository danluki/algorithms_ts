function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  if (nums.length === 1) return 1;

  let longestStreak = 1;
  let currentStreak = 1;

  let arr = nums.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 1; i < arr.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] === nums[i - 1] + 1) {
        currentStreak += 1;
      } else {
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
    }
  }

  return Math.max(longestStreak, currentStreak);
}
console.log(longestConsecutive([-1, -9, -5, -2, -9, 8, -8, 1, -9, -3, -3]));

/*Must be 4*/
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

/*Must be 9*/
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

/*Must be 1*/
console.log(longestConsecutive([0]));

/*Must be 3*/
console.log(longestConsecutive([1, 2, 0, 1]));
