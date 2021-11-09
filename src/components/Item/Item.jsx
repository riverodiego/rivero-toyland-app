import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Item(prod) {
    
    return (
        <Card key={prod.id} style={{ minWidth: '14rem', maxWidth: '16rem', maxHeight: '40rem' }} className="m-3 text-center shadow">
        <Card.Header>{prod.name}</Card.Header>
        <Card.Body className="text-center">
        <Card.Img style={{ maxWidth: '8rem', maxHeight: '10rem' }} variant="top" src={prod.foto} />
            <Card.Title> $ {prod.price}</Card.Title>
            <Card.Text> {prod.category}</Card.Text>
            <Link to={`/detalle/${prod.id}`}>
                <Button variant="primary" size="sm">Detalle del producto</Button>
            </Link>
        </Card.Body>
        <Card.Footer>
            <Card.Text className="text-muted"> {prod.stock} productos disponibles </Card.Text>
        </Card.Footer>
        </Card>
    )
}