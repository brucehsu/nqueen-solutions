/* eslint-env jest */
const { getPermutationsFromArray, evaluateBoard, findNQueenSolution} = require('./nqueen')

describe('findNQueenSolution()', () => {
    test('Given a 4x4 board with queens, returns two solutions', async () => {
      const given = 4
  
      const expected = [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

      const solutions = findNQueenSolution(given)
  
      expect(solutions.length).toEqual(expected.length)
      expected.forEach((expectedPerm) => {
        expect(solutions).toContainEqual(expectedPerm)
      })
    })

    test('Given a 1x1 board with queens, returns one solution', async () => {
        const given = 1
    
        const expected = [["Q"]]
    
        expect(findNQueenSolution(given)).toEqual(expected)
      })
  })
  

describe('getPermutationsFromArray()', () => {
  test('Given [1] as head and [2, 3], should return a set of permutations of it', async () => {
    const permutations = new Array()
    getPermutationsFromArray([1, 2, 3], 3, permutations)

    const expected = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

    expect(permutations.length).toEqual(expected.length)
    expected.forEach((expectedPerm) => {
      expect(permutations).toContainEqual(expectedPerm)
    })
  })
})


describe('evaluateBoard()', () => {
    test('Given a queen board [1, 3, 0, 2], returns true sicne there is no attack', async () => {
      const queensBoard = [1, 3, 0, 2]
  
      const expected = true
  
      expect(evaluateBoard(queensBoard)).toEqual(expected)
    })
  })
  
