const LIMIT = 4000000;

function sumEvenFibonacciNums(limit) {
  var a = 1, b = 1, c;
  var sum = 0;
  while ((a+b) <= limit) {
    c = a + b;
    a = b;
    b = c;
    if (c %2 === 0) sum += c;
  }
  return sum;
}

console.log(sumEvenFibonacciNums(LIMIT));
