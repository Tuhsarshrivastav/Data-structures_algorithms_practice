//Checkng sum zero -Problme 1
//[-5,-4,-3,-2,0,2,4,6,8] => Input
function getSumPairZero(array) {
  for (let number of array) {
    console.log("Outer loop");
    for (j = 1; j < array.length; j++) {
      console.log("inner Loop");
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}
const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);
//o(n^2) quadratic time complexity
