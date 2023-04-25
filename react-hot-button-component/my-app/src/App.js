import logo from './logo.svg';
import './App.css';
import HotButton from './HotButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click the Button :D
        </p>
        <HotButton text="Hot Button" fontSize="x-large" />
      </header>
    </div>
  );
}

export default App;
