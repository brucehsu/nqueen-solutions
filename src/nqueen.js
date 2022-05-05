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

// given: size n
// returns: permutations[][]
function getAllPermutations(size) {
    const permutations = new Array()
    const board = []
    for (let i = 0; i < size; i++) {
        board.push(i);
    }

    board.forEach((head, index) => {
      getPermutationsFromArray([head], [...board.slice(0, index), ...board.slice(index + 1)], permutations)
    })

    return permutations
}

// given: head int[], tail int[]
// returns: newPermutations int[]
function getPermutationsFromArray (head, tail, permutations) {
  let newPermutations = [...permutations]
  if (tail.length === 0) {
    permutations.push(head)
    return permutations
  }

  tail.forEach((element, index) => {
    const newHead = [...head, element]
    const newTail = [...tail.slice(0, index), ...tail.slice(index + 1)]
    getPermutationsFromArray(newHead, newTail, permutations)
  })

  return permutations
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
