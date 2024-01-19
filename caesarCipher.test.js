const { caesarCipher } = require('./caesarCipher.js');

test('caesarCipher function should shift characters i a string based on the shift factor', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});