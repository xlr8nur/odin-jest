function analyzeArray(arr) {
    const sum = arr.reduce((acc,num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        average,
        min,
        max,
        length: arr.length,
    };
};

module.exports = {
    analyzeArray,
};