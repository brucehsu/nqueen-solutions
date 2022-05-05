import React from 'react';
import './App.css';
import Solutions from './components/Solutions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {queenSize: 1};
    this.sizeChange = this.sizeChange.bind(this);
  }

  sizeChange(event) {
    this.setState({queenSize: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>n: </label>
          <select id="queen_size" value={this.state.queenSize} onChange={this.sizeChange}>
            {(new Array(9)).fill(null).map((_, idx) => {
              return (<option value={idx+1}  key={idx}>{idx+1}</option>)
            })}
          </select>
        </form>
        <Solutions queenSize={this.state.queenSize} />
      </div>
    );
  }
}

export default App;
