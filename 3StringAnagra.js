// String Anagram
// "hello" => 'llheo'

//condition
// 1st length check(for both Strings)

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  counter = {};
  for (let letters of string1) {
    counter[letters] = (counter[letters] || 0) + 1;
  }
  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] = -1;
  }
  return true;
}

const result = isAnagram("hello", "llheo");
console.log(result);

// o(n) linear time complecity
