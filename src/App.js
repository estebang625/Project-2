import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import md5 from 'md5'

function App() {
  useEffect(() => {
    let ts = Date.now()
    let hash = md5(ts + process.env.REACT_APP_PRIVATE + process.env.REACT_APP_PUBLIC)
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC}&hash=${hash}`)
    .then(data => data.json())
    .then(data => console.log(data))
  }, [])

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
      </header>
    </div>
  );
}

export default App;
