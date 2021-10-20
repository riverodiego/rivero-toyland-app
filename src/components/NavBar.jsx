import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src="../logo_tienda.png" alt="logo de la tienda" /> ToyLand </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '350px' }}
                navbarScroll
                >
                <Nav.Link href="/">Inicio</Nav.Link>
                <NavDropdown title="Categoria" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/">Peluches</NavDropdown.Item>
                    <NavDropdown.Item href="/">Muñecos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Ladrillos</NavDropdown.Item>
                    <NavDropdown.Item href="/">Autos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Cuentos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Edad" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/">1 a 3 Años</NavDropdown.Item>
                    <NavDropdown.Item href="/">4 a 6 Años</NavDropdown.Item>
                    <NavDropdown.Item href="/">6 a 9 Años</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Mayores</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/" disabled>
                    Promo del dia
                </Nav.Link>
                <Nav.Link href="/">
                    <CartWidget />
                </Nav.Link>
                </Nav>
                <Form className="d-flex mx-auto">
                <FormControl
                    type="search"
                    placeholder="Buscar en toda la tienda"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Ir</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;