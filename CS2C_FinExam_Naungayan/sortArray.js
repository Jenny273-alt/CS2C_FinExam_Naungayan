const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

const mergedArray = [...numbers, ...names];
console.log(mergedArray);

const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);

const sortedNames = names.sort();
console.log(sortedNames);