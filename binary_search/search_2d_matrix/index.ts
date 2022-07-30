function searchMatrix(matrix: number[][], target: number): boolean {
  let height = matrix.length;
  let width = matrix[0].length;

  let left = 0,
    right = height * width - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let row = Math.floor(middle / width);
    let column = middle % width;

    if (matrix[row][column] < target) {
      left = middle + 1;
    } else if (matrix[row][column] > target) {
      right = middle - 1;
    } else {
      return true;
    }
  }

  return false;
}
//4
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

//-1
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
