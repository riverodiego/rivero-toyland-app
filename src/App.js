import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <Container fluid>
      <CartContextProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' >
                  <ItemListContainer greeting="Bienvenidos" /> 
            </Route>
            <Route exact path='/categoria/:id' component={ItemListContainer}/>
            <Route exact path='/edad/:id' component={ItemListContainer}/>
            <Route exact path='/detalle/:id' component={ItemDetailContainer}/>
            <Route exact path='/cart' component={Cart}/>
          </Switch>
        </Router>
      </CartContextProvider>
    </Container>
  );
}

export default App;
