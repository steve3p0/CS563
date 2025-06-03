const characters = [
  { id: 1, name: 'Arya', house: 'Stark' },
  { id: 4, name: 'Sansa', house: 'Stark' },
  { id: 16, name: 'Eddard', house: 'Stark' },
  { id: 17, name: 'Catelyn', house: 'Stark' },
  { id: 20, name: 'Robb', house: 'Stark' },
  { id: 28, name: 'Rickon', house: 'Stark' },
  { id: 40, name: 'Jaime', house: 'Lannister' },
  { id: 41, name: 'Cersei', house: 'Lannister' },
  { id: 42, name: 'Tyrion', house: 'Lannister' },
  { id: 50, name: 'Tywin', house: 'Lannister' },
  { id: 53, name: 'Kevan', house: 'Lannister' },
  { id: 75, name: 'Daenerys', house: 'Targaryen' },
  { id: 77, name: 'Viserys', house: 'Targaryen' },
  { id: 81, name: 'Rhaegar', house: 'Targaryen' },
  { id: 83, name: 'Theon', house: 'Greyjoy' },
  { id: 84, name: 'Yara', house: 'Greyjoy' },
  { id: 87, name: 'Davos', house: 'Seaworth' },
  { id: 88, name: 'Brienne', house: 'Tarth' },
];

const mapNameFamily = (charactersArray) => {
  // Return an array with the name and house of each character
  // Format: "Arya, of House Stark"
  return charactersArray.map(character => `${character.name}, of House ${character.house}`);
};

const filterFamily = (charactersArray, targetHouse) => {
  // Return an array with only the characters from a given house
  return charactersArray.filter(character => character.house === targetHouse);
};

const reduceHouses = (charactersArray) => {
  // Return an object with the number of characters from each house
  return charactersArray.reduce((accumulator, character) => {
    const house = character.house;
    if (accumulator[house]) {
      accumulator[house]++;
    } else {
      accumulator[house] = 1;
    }
    return accumulator;
  }, {}); // Initial value is an empty object
};

console.log('--- mapNameFamily ---');
console.log(mapNameFamily(characters));
// Expected:
// [
//   'Arya, of House Stark',
//   'Sansa, of House Stark',
//   ...
// ]

console.log('\n--- filterFamily (Stark) ---');
console.log(filterFamily(characters, 'Stark'));
// Expected:
// [
//   { id: 1, name: 'Arya', house: 'Stark' },
//   ...
// ]

console.log('\n--- filterFamily (Greyjoy) ---');
console.log(filterFamily(characters, 'Greyjoy'));
// Expected:
// [
//   { id: 83, name: 'Theon', house: 'Greyjoy' },
//   { id: 84, name: 'Yara', house: 'Greyjoy' }
// ]

console.log('\n--- reduceHouses ---');
console.log(reduceHouses(characters));
// Expected:
// {
//   Stark: 6,
//   Lannister: 5,
//   Targaryen: 3,
//   Greyjoy: 2,
//   Seaworth: 1,
//   Tarth: 1
// }