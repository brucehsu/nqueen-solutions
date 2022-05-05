import React from 'react';
import '../App.css';

class SolutionRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {row} = this.props;
    const columns = [];
    let i = 0;
    for (const c of row) {
        if (c === 'Q') {
            columns.push((<span className="Chess-block" key={"col_" + (i++)}>Q</span>));
        } else {
            columns.push((<span className="Chess-block" key={"col_" + (i++)}>&nbsp;</span>));
        }
    }
    return (
      <div>
          {columns.map((column) => column)}
      </div>
    );
  }
}

export default SolutionRow;
