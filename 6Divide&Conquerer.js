//Divide and Conquerer Technique
// find the index of given no in a sorted array
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> index 6  =>output

//min = 0; element = 1
//max = array.length -1; element = 15
// 1st
// step midIndex = {min + max}/2 => {0+14} =>  7{index}, element => 8

// 2nd step
// if(minindex) < number(7)
// min=minIndex+1;

// 3nd step
// array{minIndex} > number
// max=minIndex - 1 , min = 0 max = 6 {1,2,3,4,5,6,7}
// (min + max)/2 => 3

// 4nd step
// index +1 => 4 (min), max =6  {5,6,7}
// (min + max)/2 => 5 + 1 =>  6{min} , max = 6

// 5nd step
// (min +max)/2 => 6
// else minIndex => 6, element = 7

function searchAlgo(array, num) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    if (array[midIndex] < num) {
      min = midIndex + 1;
    } else if (array[midIndex] > num) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

const result = searchAlgo(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);
console.log(result);

// time complexity binary o(log(n))