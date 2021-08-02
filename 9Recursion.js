// Recursion : which function call itself
// otherwise it will get callled for infinite time
// if a fucntin call itself then there must be an end pont

let counter = 1;
function demo(number) {
  if (counter > number) {
    return;
  }
  console.log("Recursion Introduction" + counter);
  counter++;
  demo(number);
}
demo(10);
