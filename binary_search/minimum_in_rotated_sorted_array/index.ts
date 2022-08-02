function findMin(nums: number[]): number {

  if(nums.length === 1) return nums[0];

  let left = 0,
    right = nums.length - 1,
    middle = 0;

  while (left <= right) {
    middle = (left + right) >> 1;
    
    if(nums[left] < nums[right]){
      return nums[left];
    }

    if(nums[left] <= nums[middle]){
      left = middle + 1;
    }

    if(nums[middle] < nums[left]){
      right = middle;
    }
  }

  return nums[left];
}

//1
console.log(findMin([3, 4, 5, 1, 2]));

//0
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

//11
console.log(findMin([11, 13, 15, 17]));
