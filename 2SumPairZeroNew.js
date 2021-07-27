//Checkng sum zero New -Problme 1
//[-5,-4,-3,-2,0,2,4,6,8] => Input
//[?,?] => output

//Anothor Solution
function FindSumPair(array) {
  let left = 0;
  let right = array.length - 2;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const result = FindSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// o(n) linear time complecity
