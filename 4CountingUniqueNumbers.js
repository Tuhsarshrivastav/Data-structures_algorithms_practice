//Counting Unique Numbers Problem
//  i  j
// [1,1,2,2,3,4,4,5,6,7,8,8]
//output = 8
// i=0 j=1
//array[1]!=array[j]
//1. j++
//2. array[i]=array[j]
function CountingUniqueNumbers(array) {
  if (array.length > 0) {
    let i = 0;
    for (j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array shuold be > 0");
  }
}
const result = CountingUniqueNumbers([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(result);

//o(n) linear time complexcity
