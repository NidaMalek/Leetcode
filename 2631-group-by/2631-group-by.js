/**
 * @param {Function} fn
 * @return {Object}
 */
//This line adds a new method called groupBy to the Array prototype. This means that any array object in JavaScript can now call this method.
//The groupBy function takes a single argument fn, which represents the function to be used for grouping the array elements
Array.prototype.groupBy = function(fn) {
    
             // Reduce the array into a single object
             //this.reduce((grouped, item) => { ... }): The reduce function is used to iterate over each element in the array and accumulate a final                  result. The initial value for the accumulator is an empty object {}.
    
  return this.reduce((grouped, item) => {
      
             //Inside the reduce function, we have an arrow function with two parameters: grouped and item. grouped represents the object that stores                the grouped elements, and item represents the current element being processed.
      
             //const key = fn(item);: This line calls the provided function fn with the current element item as an argument to determine the grouping                 key. The returned value is stored in the key variable.

            // Apply the provided callback function to get the key
      
    const key = fn(item);
    
            //if (!grouped[key]) { grouped[key] = []; }: This code block checks if the key already exists as a property in the grouped object. If not,                it creates a new property with the key name and assigns an empty array [] as its value.
            // If the key doesn't exist in the grouped object, create a new array for it
      
    if (!grouped[key]) {
      grouped[key] = [];
    }
           //grouped[key].push(item);: This line adds the current item to the array corresponding to its key in the grouped object. This effectively               groups the elements based on their key values.

          // Push the current item to the array associated with the key
      
    grouped[key].push(item);
    
          //Finally, return grouped; is used to return the updated grouped object after all the elements have been processed.

          // Return the updated grouped object for the next iteration
      
    return grouped;
  }, {});
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */