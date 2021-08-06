//Helper Recursive function
// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9]
// number%2!==0

function findodd(array) {
  let result = [];
  function helperRecursive(inputArray) {
    if (inputArray.length === 0) {
      return;
    }
    if (inputArray[0] % 2 !== 0) {
      result.push(inputArray[0]);
    }
    helperRecursive(inputArray.slice(1));
  }
  helperRecursive(array); // 1st time calling
  return result;
}
const res = findodd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);
