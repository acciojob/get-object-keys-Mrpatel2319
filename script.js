//your JS code here. If required.
// Create a JavaScript object called student
const student = {
  name: "John Doe", // Example name
};

// Function to get the keys of an object
function getKeys(obj) {
  return Object.keys(obj);
}

// Test the function by passing the student object
const keys = getKeys(student);

// Verify the result and log it
console.log(keys); // Should log: ['name']
