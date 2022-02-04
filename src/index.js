
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let arr = [];
if (arguments.length == 0) {
  return arr;
}

  for (let i = 0; i<matrix.length;i++) {
 
  
   if (matrix.indexOf(matrix[i]) % 2 !== 0) {
     matrix[i].reverse();
     
   }
}

  return matrix.flat();
}
