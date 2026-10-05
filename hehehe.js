const mathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  
  computeAll(a, b) {
    return {
      sum: this.add(a, b),
      difference: this.subtract(a, b)
    };
  }
};

class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(n) {
    this.value += n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  subtract(n) {
    this.value -= n;
    return this;
  }

  getResult() {
    return this.value;
  }
}


console.log("Object Methods:", mathOperations.computeAll(10, 4));

const chainedResult = new Calculator(5)
  .add(10)
  .multiply(2)
  .subtract(4)
  .getResult();

console.log("Chained Result:", chainedResult); 
// Output: 26