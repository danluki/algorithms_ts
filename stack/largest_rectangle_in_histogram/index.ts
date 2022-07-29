function largestRectangleArea(heights: number[]): number {
  let i = 0,
    maxarea = 0;
  let stack: { index: number; height: number }[] = [];
  while (i < heights.length) {
    let start = i;
    while (stack.length > 0 && heights[i] < stack[stack.length - 1].height) {
      maxarea = Math.max(maxarea, stack[stack.length - 1].height * (i - stack[stack.length - 1].index))
      start = stack[stack.length - 1].index;
      stack.pop();
    }
    stack.push({
      index: start,
      height: heights[i],
    });
    i++;
  }
  for(let i = 0; i < stack.length; i++){
    maxarea = Math.max(maxarea, stack[i].height * (heights.length - stack[i].index));
  }

  return maxarea;
}
console.log(largestRectangleArea([2, 1, 2]))
console.log(largestRectangleArea([1, 1]));

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

console.log(largestRectangleArea([2, 4]));
