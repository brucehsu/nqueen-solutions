function findNQueenSolution(size) {
    const solutions = []
    const permutations = getAllPermutations(size)
    permutations.forEach(permutation => {
      if (evaluateBoard(permutation)) {
        solutions.push(permutation)
      }
    })

    return formatSolutions(solutions, size)
};

function formatSolutions(solutions, size) {
  return solutions.map((solution) => {
    const formattedResults = []
    return solution.map((col) => {
      const resultString = "".padStart(size, ".")
      return resultString.substring(0, col) + "Q" + resultString.substring(col +  1)
    })
  })
}

// given: size
// returns: permutations[][]
function getAllPermutations(size) {
    const permutations = new Array()
    const board = []
    for (let i = 0; i < size; i++) {
        board.push(i);
    }

    getPermutationsFromArray(board, size, permutations)

    return permutations
}

// given: array int[], size
// returns: permutaions int[]
function getPermutationsFromArray (array, size, permutations) {
  if (size === 1) {
    permutations.push([...array])
  }

  for (let i = 0; i < size; i++) {
    getPermutationsFromArray(array, size - 1, permutations)
    if (size % 2 == 0) {
      [array[i], array[size - 1]] = [array[size - 1], array[i]]
    } else {
      [array[0], array[size - 1]] = [array[size - 1], array[0]]
    }
  }
}

// given: a board with queens, encoded in the form queensBoard[row] => col
// returns: no-attack boolean
function evaluateBoard (queensBoard) {
  // queensBoard[row] => [col]
  let noAttack = true;
  queensBoard.forEach((col, row) => {
    if (!noAttack) {
      return
    }
    // north-west => row--, col--
    for(let currentRow = row - 1, currentCol = col - 1; currentRow >= 0 && currentCol >= 0; currentRow--, currentCol-- ){
      const queenColOfRow = queensBoard[currentRow];
      if (queenColOfRow === currentCol) {
        noAttack = false
        return
      }
    }
    // north-east => row--, col++
    for(let currentRow = row - 1, currentCol = col + 1; currentRow >= 0 && currentCol < queensBoard.length; currentRow--, currentCol++){
      const queenColOfRow = queensBoard[currentRow];
      if (queenColOfRow === currentCol) {
        noAttack = false
        return
      }
    }
  })
  return noAttack
}

module.exports = {
  findNQueenSolution,
  getPermutationsFromArray,
  evaluateBoard
}
