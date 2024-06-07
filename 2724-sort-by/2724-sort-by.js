/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
//We create a custom sort in this format:

var sortBy = function(arr, fn) {
     return arr.sort((a, b) => fn(a) - fn(b));
};

//                    arr.sort((a, b) => [expression])
//The sort function will constantly swap values based on our custom sort function. If the function's return value is negative, a should go to the left of b. If the return value is positive, a should go to the right of b. The custom sort function we want is simple and is as follows:

//                     (a, b) => fn(a) - fn(b)
//If fn(a) is less than fn(b), then the function will return a negative value and a will go before b. If fn(a) is greater than fn(b), the function will return a positive value, and a will go after b.
  