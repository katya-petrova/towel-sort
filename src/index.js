
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof (matrix) === 'undefined') {
        return [];
    }
    for (let i = 1; i < matrix.length; i = i + 2) {
        matrix[i].reverse();
    }
    return matrix.concat.apply([], matrix);
}
