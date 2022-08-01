function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1, middle = 0;

  while(left <= right){
    middle = left + Math.round((right - left) / 2); 

    if(nums[middle] === target) return middle;

    if(nums[left] <= nums[middle]){
      if(target > nums[middle] || target < nums[left]){
        left = middle + 1;
      }
      else{
        right = middle -1;
      }
    }
    else{
      if(target < nums[middle]){
        right = middle - 1;
      }
      else if (target > nums[right]){
        right = middle - 1;
      }
      else{
        left = middle + 1;
      }
    }
  }

  return -1;
}
//4
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

//-1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));

//-1
console.log(search([1], 0));
