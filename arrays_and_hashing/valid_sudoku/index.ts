function checkForValidRow(range: string[]) {
  const values = new Set();

  for (let i = 0; i < range.length; i++) {
    if (range[i] === ".") continue;

    if (values.has(range[i])) return false;

    values.add(range[i]);
  }

  return true;
}

function checkSquareForValid(square: string[]) {
  const values = new Set();

  for (let i = 0; i < square.length; i++) {
    if (square[i] === ".") continue;

    if (values.has(square[i])) return false;

    values.add(square[i]);
  }

  return true;
}

function isValidSudoku(board: string[][]): boolean {
  /*Check for rows and columns*/
  for (let i = 0; i < board.length; i++) {
    if (!checkForValidRow(board[i])) return false;

    let column: string[] = [];
    for (let j = 0; j < board.length; j++) {
      column.push(board[j][i]);
    }
    if (!checkForValidRow(column)) {
      return false;
    }
  }

  /*Check for 3x3 squares*/
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      let square: string[] = [];
      for (let k = i; k < i + 3; k++) {
        for (let m = j; m < j + 3; m++) {
          square.push(board[k][m]);
        }
      }
      if (!checkSquareForValid(square)) return false;
    }
  }

  return true;
}
/*false*/
console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ])
);

/*Must be true*/
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
/*Must be false*/
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
