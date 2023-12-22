// Code your solution here
// Function to find drivers with an exact name match
function findMatching(drivers, name) {
    const lowercasedName = name.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowercasedName);
  }
  
  
  // Function to find drivers with names starting with the provided letters
  function fuzzyMatch(drivers, letters) {
    const regex = new RegExp(`^${letters}`, 'i');
    return drivers.filter(driver => regex.test(driver));
  }
  
  // Function to find drivers whose name matches a given input
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Function to find drivers with an exact name match
function findMatching(drivers, name) {
  const lowercasedName = name.toLowerCase();
  return drivers.filter(driver => driver.toLowerCase() === lowercasedName);
}
