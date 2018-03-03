module.exports = function solveSudoku(matrix) {

    let matrixCopy = matrix;

    function changeZero(matrixCopy) {
        for (let i = 0; i < matrixCopy.length; i++) {
            for (let j = 0; j < matrixCopy[i].length; j++) {
                if (matrix[i][j] == 0) {
                    matrixCopy[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                }
            }
        }
        return matrixCopy;
    };

    function column(matrixCopy) {
        for (let i = 0; i < matrixCopy.length; i++) {
            for (let j = 0; j < matrixCopy[i].length; j++) {
                if (matrixCopy[i][j]) {
                    for (let a = 0; a < matrixCopy[i][j].length; a++) {
                        for (let k = 0; k < 9; k++) {
                            if (matrixCopy[i][j][k] == matrixCopy[a][j] && !matrixCopy[a][j]) {
                                matrixCopy[i][j].splice(k, 1);
                                if (matrixCopy[i][j].length == 1) {
                                    matrixCopy[i][j] = matrixCopy[i][j][0];
                                }
                            }
                        }
                    }
                }
            }
        }
        return matrixCopy;
    };

    function line(matrixCopy) {
        let arrPos = [];
        for (let i = 0; i < matrixCopy.length; i++) {
            for (let j = 0; j < matrixCopy[i].length; j++) {
                if (matrixCopy[i][j]) {
                    arrPos.push(j);
                }
            }
            for (let j = 0; j < arrPos.length; j++) {
                for (let a = 0; a < matrixCopy[i][arrPos[j]].length; a++) {
                    for (let k = 0; k < matrixCopy[i].length; k++)
                        if (matrixCopy[i][arrPos[j]][a] == matrixCopy[i][k]) {
                            matrixCopy[i][arrPos[j]].splice(a, 1);
                            if (matrixCopy[i][arrPos[j]].length == 1) {
                                matrixCopy[i][arrPos[j]] = matrixCopy[i][arrPos[j]][0];
                            }
                        }
                }
            }
        }
        return matrixCopy;
    };


    return line(column(changeZero(matrixCopy)));
};