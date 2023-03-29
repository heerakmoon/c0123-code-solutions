import logo from './logo.svg';
import './App.css';
import CustomButton from './custombutton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton text="I" color="red" fontSize="large" />
          <CustomButton text="know" color="green" fontSize="large" />
          <CustomButton text="React!" color="lightskyblue" fontSize="large" />
        </div>
      </header>
    </div>
  );
}

export default App;
