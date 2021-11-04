import ItemCount from './ItemCount'
import {Card, Button} from 'react-bootstrap';
import MessageAlert from '../MessageAlert/MessageAlert';
import { Link } from 'react-router-dom';

export default function Item(prod) {
    
    return (
        <Card key={prod.id} style={{ width: '18rem' }} className="mt-5 text-center">
        <Card.Header>{prod.name}</Card.Header>
        <Card.Body>
        <Card.Img variant="top" src={prod.foto} />
            <Card.Title> $ {prod.price}</Card.Title>
            <Card.Text> {prod.category}</Card.Text>
            <ItemCount stock={prod.stock} initial={1} addOn={MessageAlert}/>
        </Card.Body>
        <Card.Footer>
            <Link to={`/detalle/${prod.id}`}>
                <Button variant="primary" size="sm">Detalle del producto</Button>
            </Link>
        </Card.Footer>
        </Card>
    )
}