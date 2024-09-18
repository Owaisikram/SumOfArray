
const matrix1 = [
    [0, 2, 5],
    [5, 0, 6],
    [1, 0, 0],
  ];
  const matrix2 = [
    [0, 2, 1],
    [5, 0, 2],
    [1, 0, 19],
  ];

  const sumArray = []
  for (let i = 0; i < matrix1.length ; i++) {

    const row = [];
    for (let j = 0; j < matrix2.length ; j++) {
      row.push(matrix1[i][j] + matrix2[i][j]);
    }
    sumArray.push(row);
  }

  console.log(sumArray);
  