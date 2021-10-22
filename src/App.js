import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';
import {Container, Row, Col} from 'react-bootstrap';
import ItemContainer from './components/containers/ItemContainer';

function App() {
  return (
    <Container fluid>
      <NavBar />
      <Row className="mx-0">
        <Col className="mt-5 text-center"> 
          <ItemListContainer greeting="Bienvenido a Lista de Productos" componentItem={ItemContainer} /> 
        </Col>
      </Row>
    </Container>
  );
}

export default App;
