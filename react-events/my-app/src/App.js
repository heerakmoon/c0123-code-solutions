import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleClick(text, color) {
    alert(`Clicked ${color} ${text} button`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CustomButton text="puppy" color="lightpink" onCustomClick={handleClick} />
        <CustomButton text="kitten" color="skyblue"  onCustomClick={handleClick}/>
        <CustomButton text="bunny" color="yellow"  onCustomClick={handleClick}/>
      </header>
    </div>
  );
}

export default App;
