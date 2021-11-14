import {Navbar,Nav,NavDropdown,Form,FormControl,Button, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartWidget from './CartWidget';

const NavBar = () => {
    const { totalCart } = useCartContext();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/"><img src="../logo_tienda.png" alt="logo de la tienda" /> ToyLand </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '350px' }}
                navbarScroll
                >
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <NavDropdown title="Categoria" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/categoria/peluches">Peluches</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/muñecos">Muñecos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/categoria/ladrillos">Ladrillos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/autos">Autos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/categoria/cuentos">Cuentos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/juegosdemesa">Juegos de Mesa</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Edad" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/edad/1a3años">1 a 3 Años</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/edad/4a6años">4 a 6 Años</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/edad/7a9años">7 a 9 Años</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/edad/mayores">Mayores</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/" disabled>
                    Promo del dia
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form className="d-flex mx-auto">
                <FormControl
                    type="search"
                    placeholder="Buscar en toda la tienda"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Ir</Button>
            </Form>
            <Nav.Link as={Link} to="/cart">
                    <CartWidget /> <Badge bg="success" > $ {totalCart()}</Badge>
            </Nav.Link>
        </Navbar>
    )
}

export default NavBar;