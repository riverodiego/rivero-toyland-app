import {Card, Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Item(prod) {
    
    return (
        <Card key={prod.id} style={{ minWidth: '14rem', maxWidth: '16rem', maxHeight: '40rem' }} className="m-3 text-center shadow">
        <Card.Header>{prod.name}</Card.Header>
        <Card.Body className="text-center">
        <Card.Img style={{ minWidth: '9rem', minHeight: '10rem', maxWidth: '9rem', maxHeight: '10rem' }} variant="top" src={prod.foto} />
            <Card.Title> $ {prod.price}</Card.Title>
            <Card.Text> {prod.category}</Card.Text>
            <Link to={`/detalle/${prod.id}`}>
                <Button variant="primary" size="sm">Detalle del producto</Button>
            </Link>
        </Card.Body>
        <Card.Footer>
            <Card.Text className="text-muted"> Edad: {prod.age} </Card.Text>
            { prod.stock < 1 ? 
                <Alert variant={"danger"}> Producto Sin Stock </Alert>
                :
                <Alert variant={"light"}>{prod.stock} productos disponibles </Alert> 
            }
        </Card.Footer>
        </Card>
    )
}