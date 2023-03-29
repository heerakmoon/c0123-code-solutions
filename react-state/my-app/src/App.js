import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ToggleButton text="Click Me :)" color="lightblue" />
        <ToggleButton text="No, Click Me O-O" color="lightpink" />
        <ToggleButton text="NO. CLICK ME! >:(" color="yellow" />
      </header>
    </div>
  );
}

export default App;
