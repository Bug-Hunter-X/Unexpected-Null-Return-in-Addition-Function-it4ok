function foo(a, b) {
  if (a === null || b === null) {
    throw new Error("Null values are not allowed");
  }
  return a + b;
}
console.log(foo(1, 2)); // Output: 3
//console.log(foo(null, 2)); //Throws an error
//console.log(foo(1, null)); //Throws an error
//console.log(foo(null, null)); //Throws an error