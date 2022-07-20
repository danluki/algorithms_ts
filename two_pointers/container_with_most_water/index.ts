function maxArea(height: number[]): number {
  let i = 0,
    j = height.length - 1;
  let water = 0;
  let maxWater = 0;

  while (i < j) {
    let maxHeight = Math.min(height[i], height[j]);
    let water = maxHeight * (j - i);

    if (water > maxWater) {
      maxWater = water;
    }
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return maxWater;
}
