function multiply(a, b) {
  return a * b;
}

const add = (a, b) => a + b;

// 3. Higher-Order Function (Takes another function as an argument)
function applyOperation(num1, num2, operation) {
  return operation(num1, num2);
}

function runPipeline(initialValue, ...functions) {
  return functions.reduce((currentValue, fn) => fn(currentValue), initialValue);
}

const double = (x) => x * 2;
const addFive = (x) => x + 5;
const square = (x) => x * x;

console.log("Basic Multiply:", multiply(4, 5)); // 20
console.log("Arrow Add:", add(10, 20));          // 30

console.log("Higher-Order (Add):", applyOperation(10, 5, add));          // 15
console.log("Higher-Order (Multiply):", applyOperation(10, 5, multiply)); // 50

const pipelineResult = runPipeline(5, double, addFive, square);
console.log("Pipeline Result:", pipelineResult); // 225