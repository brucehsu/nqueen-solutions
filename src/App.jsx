import React, {useState} from 'react';
import './App.css';
import Solutions from './components/Solutions';

function App() {
  const [queenSize, setQueenSize] = useState(1);
  return (
    <div className="App">
      <form>
        <label>n: </label>
        <select id="queen_size" value={queenSize} onChange={(event) => setQueenSize(event.target.value)}>
          {(new Array(9)).fill(null).map((_, idx) => {
            return (<option value={idx+1}  key={idx}>{idx+1}</option>)
          })}
        </select>
      </form>
      <Solutions queenSize={queenSize} />
    </div>
  );
}

export default App;