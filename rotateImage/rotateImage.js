// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?
const picture = [
  ['x', 1, 1],            //[3, 2, 'x']
  [2, 'x', 2],            //[3, 'x', 1]
  [3, 3, 'x']             //['x', 2, 1]
];

const rotateMatrix = (matrix) => {

  let numRows = matrix.length;
  let container = [];
  for (let i = 0; i < numRows; i++) {
    let temp = [];
    for (let m = 0; m < numRows; m++) {
      temp.push(matrix[m][i]);
    }
    container.push(temp.reverse());
  }

  return container;
};

console.log(rotateMatrix(picture));
