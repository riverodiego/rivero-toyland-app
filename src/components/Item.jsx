import React from 'react'
import ItemCount from './ItemCount'
import {Card, Button} from 'react-bootstrap';

export default function Item(prod) {

    const handleClick=(contador) =>{
        alert(`La cantidad agregada es ${contador}`)
        }

    return (
        <Card key={prod.id} style={{ width: '18rem' }} className="mt-5">
        <Card.Header>{prod.name}</Card.Header>
        <Card.Body>
            <Card.Img variant="top" src={prod.foto} />
            <Card.Title> $ {prod.price}</Card.Title>
            <ItemCount stock={8} initial={1} addOn={handleClick}/>
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" size="sm">Detalle del producto</Button>
        </Card.Footer>
        </Card>
    )
}
