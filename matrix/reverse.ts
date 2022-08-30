/**
 //transponse-reverse
 */
 function rotate(matrix: number[][]): void {
  let n = matrix.length;
  let temp;
  for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
      temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }

  for(let i = 0; i < n; i++){
    for(let j = 0; j < Math.trunc(n / 2); j++){
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }
  console.log(matrix);
};