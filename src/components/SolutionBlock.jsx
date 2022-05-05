import React from 'react';
import SolutionRow from './SolutionRow';

class SolutionBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {solution} = this.props
    return (
      <div>
          {solution.map((row, idx) => {
              return <SolutionRow key={"row_" + idx} row={row}></SolutionRow>
          })}
          <hr />
      </div>
    );
  }
}

export default SolutionBlock;
