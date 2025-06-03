const formatItems = (input) => {
  // return a string of the concatenated numbers, separated by commas and with three digits after the decimal point

  // for reference, see the MDN Number page:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

  if (!Array.isArray(input)) {
    // Optional: Handle cases where input is not an array, though test cases are arrays.
    return "Invalid input: Expected an array.";
  }

  const formattedNumbers = input.map(number => {
    // Ensure the item is a number before calling toFixed
    if (typeof number === 'number') {
      return number.toFixed(3);
    }
    // Fallback for non-numeric items if they could exist in the array
    return 'NaN'; // Or handle as an error
  });

  return formattedNumbers.join(', ');
};

console.log(formatItems([1, 4, 17, 26, 41]));
// expected: '1.000, 4.000, 17.000, 26.000, 41.000'
console.log(formatItems([34.0, 12.0, 13.7, 760.1, 10.5]));
// expected: '34.000, 12.000, 13.700, 760.100, 10.500'
console.log(formatItems([235.235778, 1.2346789, 14.7, 97.3, 714.1245678]));
// expected: '235.236, 1.235, 14.700, 97.300, 714.125'