import logo from './logo.svg';
import './App.css';

const buttonStyle = {
  style: {
    backgroundColor: 'rgb(3, 190, 252)',
    color: 'white',
    fontSize: 'large'
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={buttonStyle.style}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
