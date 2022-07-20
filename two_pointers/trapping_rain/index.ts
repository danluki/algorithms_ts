function trap(height: number[]): number {
  let total = 0;

  for (let i = 1; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let minHeight = Math.min(height[i], height[j]);
      let water = minHeight * (j - i);
      if (water > 0) {
        total += water;
        break;
      }
    }
  }

  return total;
}

//9
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

//1
console.log(trap([4, 2, 0, 3, 2, 5]));
