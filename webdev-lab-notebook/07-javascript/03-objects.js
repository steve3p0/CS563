let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  result[key] = value;
  return key; // As per starter, though returning true/false or the object might be more conventional
};

const deleteItem = (key) => {
  // remove the property with key from result
  if (result.hasOwnProperty(key)) {
    delete result[key];
  }
  return key; // As per starter
};

const lookupItem = (key) => {
  // return the value from result that is associated with key
  if (result.hasOwnProperty(key)) {
    return result[key];
  }
  return 'Item does not exist';
};

const printItems = () => {
  // return a string of the concatenated key in result, separated by commas
  return Object.keys(result).join(', ');
};

insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'ipsum'

deleteItem('lorem');
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'Item does not exist'