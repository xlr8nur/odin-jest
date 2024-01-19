const { reverseString } = require('./reverseString.js');

test('reserveString function should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
});