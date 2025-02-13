function foo(a, b) {
  if (a === null || a === 0 || b === null || b === 0) {
    return 0; // Handle null and 0 values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(5, 10)); // Output: 15
console.log(foo(0,5)); //Output: 0
console.log(foo(5,0)); //Output: 0