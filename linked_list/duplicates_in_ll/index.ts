/*
  Linked lis tcycle problem, aslo the Floyd algorithm
*/

function findDuplicate(nums: number[]): number {
  let slow = 0, fast = 0
  
  while(true){
      slow = nums[slow];
      fast = nums[nums[fast]];
      if(slow === fast){
          break;
      }  
  } 
  
  let slow2 = 0;
  
  while(true){
      slow = nums[slow];
      slow2 = nums[slow2];
      
      if(slow === slow2){
          break;
      }
  }
  
  return slow;
};