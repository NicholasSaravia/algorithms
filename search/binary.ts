export const binary_search = (haystack: number[], needle: number): number => {
  let low = 0;
  let high = haystack.length;

  while (low < high) {
    // determin middle of haystack w/ offset
    let middle = Math.floor(low + (high - low) / 2);
    const value = haystack[middle];

    if (value === needle) return middle;

    if (value < needle) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }

  return -1;
};

const result = binary_search([1, 3, 4, 5, 9, 10, 400, 743, 800, 900], 3);
console.log(result);
