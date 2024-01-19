const { calculator } = require('./calculator.js');

test('calculator object should add two numbers', () => {
    expect(calculator.add(2,3)).toBe(5);
});

test('calculator object should multiply two numbers', () => {
    expect(calculator.multiply(2,3)).toBe(6);
});

test('calculator object should substract two numbers', () => {
    expect(calculator.substract(2,3)).toBe(-1);
});

test('calculator object should divide two numbers', () => {
    expect(calculator.divide(2,3)).toBe(0.6666666666666666);
});