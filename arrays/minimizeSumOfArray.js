const minSum = array => {
  const sum = [];
  const sorted = array.sort((a, b) => a - b);
  while (sorted.length != 0) {
    let min = sorted[0];
    let max = sorted[sorted.length - 1];
    sum.push(min * max);
    sorted.splice(0, 1);
    sorted.splice(-1, 1);
  }
  return sum.reduce((a, b) => a + b);
};
console.log(minSum([12, 6, 10, 26, 3, 24]));
// 342

const minSum2 = array => {
  const sum = [];
  const sorted = array.sort((a, b) => a - b);
  while (sorted.length != 0) {
    sum.push(sorted.shift() * sorted.pop());
  }
  return sum.reduce((a, b) => a + b);
};
console.log(minSum2([12, 6, 10, 26, 3, 24]));
