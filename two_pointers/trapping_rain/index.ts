// function trap(height: number[]): number {
//   let maxLeft: number[] = [0],
//       maxRight: number[] = [],
//       minArr: number[] = [],
//       total = 0;

//   let max = 0;
//   for(let i  = 1; i < height.length; i++){
//     if(height[i - 1] >= max){
//       max = height[i - 1];
//     }
//     maxLeft[i] = max;
//   }

//   max = 0;
//   maxRight[height.length - 1] = 0;
//   for(let i  = height.length - 2; i >=0; i--){
//     if(height[i + 1] >= max){
//       max = height[i + 1];
//     }
//     maxRight[i] = max;
//   }

//   for(let i = 0; i < height.length; i++){
//     minArr[i] = Math.min(maxLeft[i], maxRight[i]);
//   }

//   for(let i = 0; i < height.length; i++){
//     let currWater = minArr[i] - height[i];
//     if(currWater > 0)
//       total += minArr[i] - height[i];
//   }

  
//   return total;
// }

function trap2(height: number[]) : number {
  let maxL = 0, maxR = 0, i = 0, j = height.length - 1, total = 0, curWater = 0;

  while(i < j){
    curWater = maxL - height[i];
    let curWaterR = maxR - height[j];
    if(curWater > 0){
      total += curWater;
    }

    if(curWaterR > 0){
      total += curWaterR;
    }

    if(height[i] >= maxL){
      maxL = height[i];
    }
    if(height[j] >= maxR){
      maxR = height[j];
    }

    if(maxL <= maxR){
      i++;
    }
    else{
      j--;
    }
  }
  return total;
}

//6
console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

//9
console.log(trap2([4, 2, 0, 3, 2, 5]));
