const calculator = {
    add: (a,b) => a + b,
    substract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => (b!==0 ? a/b : 'Cannot divide by zero'),
};

module.exports = {
    calculator,
};