function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1,
    middle = 0;

  while (left <= right) {
    middle = left + Math.round((right - left) / 2);

    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
//4
console.log(search([-1, 0, 3, 5, 9, 12], 9));

//-1
console.log(search([-1, 0, 3, 5, 9, 12], 2));
