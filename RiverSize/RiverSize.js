const matrix1 = [
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 0, 1],
];

const getRiverSize = (matrix) => {
  const size = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        size.push(visitNode(matrix, i, j));
      }
    }
  }
  return size;
};

const visitNode = (matrix, i, j) => {
  //base case
  if (
    i >= matrix.length ||
    j >= matrix[0].length ||
    i < 0 ||
    j < 0 ||
    matrix[i][j] === 0
  )
    return 0;
  else {
    matrix[i][j] = 0;
    return (
      1 +
      visitNode(matrix, i + 1, j) +
      visitNode(matrix, i, j + 1) +
      visitNode(matrix, i - 1, j) +
      visitNode(matrix, i, j - 1)
    );
  }
};

console.log(getRiverSize(matrix1));
