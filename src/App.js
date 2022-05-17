import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Clock from './Clock';
import ClockWithHooks from './ClockWithHooks.js';
import ClockWithHooks1 from './ClockWithHooks1.js';
import Weather,{TemperatureInCelcius} from './Weather.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TemperatureInCelcius/>
      
      <header className="App-header">
      
      <Clock/>
      <ClockWithHooks/>
      <ClockWithHooks1/>
      <Weather/>
      
      
    
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
          Learn Reactjs and Native
        </a>
      </header>

    </div>
  );
}

export default App;
