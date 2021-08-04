//Sorting using Recursive function
// [2,3,1,4] -> by deafult case
// [2,1,3,4] -> case 1
// [1,2,3,4] -> case final output

let myArray = [2, 3, 1, 4];
let myNewList = [];
let i = 0;
let j = 1;

//checking array already sorted or  not
function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  // if sorted
  return true;
}
// if sorted not
function SortCheck(array) {
  if (isSorted(array)) {
    myNewList = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    SortCheck(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    SortCheck(array);
  }
}
SortCheck(myArray);
console.log(myNewList);
