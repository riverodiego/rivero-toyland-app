import NavBar from './components/NavBar';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <NavBar />
      <header className="App-header">
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
        <button className="btn btn-primary">HOLA USUARIO</button>
      </header>
    </Container>
  );
}

export default App;
