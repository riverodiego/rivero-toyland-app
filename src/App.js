import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <NavBar />
      <Row className="mx-0">
        <Col className="mt-5 text-center"> 
          <ItemListContainer greeting="Bienvenidos" /> 
        </Col>
      </Row>
    </Container>
  );
}

export default App;
