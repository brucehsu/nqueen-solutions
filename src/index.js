const {findNQueenSolution} = require('./nqueen')

for( let i = 1 ; i <= 9 ; i++) {
    console.log(i + ":" + findNQueenSolution(i).length)
}
