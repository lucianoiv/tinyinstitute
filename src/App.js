import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nuestra WEB se encuentra en construcción.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/tiny_institute/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seguinos en Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
