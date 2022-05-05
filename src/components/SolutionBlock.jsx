import React from 'react';

class SolutionBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {solution} = this.props
    return (
      <div>
          {solution.map((row, idx) => {
              return <div key={"row_" + idx}>{row}</div>
          })}
          <hr />
      </div>
    );
  }
}

export default SolutionBlock;
