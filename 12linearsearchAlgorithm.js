// Linear Search Algorithm
const users = [
  { username: "tushar", email: "ts3657@gmail.com" },
  { username: "dhruv", email: "dhruv3657@gmail.com" },
  { username: "tanu", email: "tanu3657@gmail.com" },
];

function isuserExit(array, val) {
  for (let item of array) {
    if (item["username"] === val) {
      return true;
    }
  }
  return false;
}
const res = isuserExit(users, "tushar");
console.log(res);
