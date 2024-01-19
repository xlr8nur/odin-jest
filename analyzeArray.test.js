const { analyzeArray } = require('./analyzeArray.js');

test('analyzeArray function should return an object with average, min, max and length properties', () => {
    const result = analyzeArray([1,2,3,4,5]);
    expect(result).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});