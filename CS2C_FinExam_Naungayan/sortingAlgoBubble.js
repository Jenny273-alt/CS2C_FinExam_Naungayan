const numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

function bubbleSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      console.log(`Comparison: ${array[j]} and ${array[j+1]}`);
    }
  }
  console.log(`Sorted array: ${array}`);
}

bubbleSort(numbers);