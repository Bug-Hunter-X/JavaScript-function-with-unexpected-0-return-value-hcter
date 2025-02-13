# JavaScript Function Bug

This repository demonstrates a subtle bug in a JavaScript function that handles null values. The function `foo` is designed to return 0 if either of its arguments is `null`. However, it also returns 0 if either of its arguments is 0, even if this is not intended. 

## Bug Description
The function `foo` unexpectedly returns 0 when one of the input parameters is 0. This can lead to unexpected behavior in applications where 0 is a valid input value.

## Solution
The bug is solved by explicitly checking for both `null` and `0` values in the conditional statement. 

## How to Run
1. Clone the repository.
2. Open `bug.js` to see the buggy implementation.
3. Open `bugSolution.js` to see the corrected implementation.
4. Run the JavaScript files in a browser console or using Node.js.