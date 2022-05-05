import React, {useMemo} from 'react';
import {findNQueenSolution} from '../nqueen'
import SolutionBlock from './SolutionBlock';

function Solutions({queenSize}) {    
    const solutions = useMemo(() => findNQueenSolution(queenSize), [queenSize]);
    return (
        <div>
            <div>
            Size of solutions: {solutions.length}
            </div>
            <hr />
            {solutions.map((solution, idx) => {
                return (<SolutionBlock solution={solution} key={"solution_" + idx}></SolutionBlock>)
            })}
        </div>
    );
}

export default Solutions;
