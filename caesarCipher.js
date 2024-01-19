function shiftChar(char, shift) {
    const isUpperCase = char === char.toUpperCase();
    const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    const charCode = char.charCodeAt(0);

    if(charCode >= base && charCode < base + 26) {
        const shifted = (charCode - base + shift) % 26;
        return String.fromCharCode(base + (shifted >= 0 ? shifted : 26 + shifted)); 
    }

    return char;
}

function caesarCipher(str, shift) {
  return str
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
}

module.exports = {
    caesarCipher,
};