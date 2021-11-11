import React, { useState } from 'react'
import ItemCount from '../../../Item/ItemCount'
import {Card, Button, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../../context/CartContext';

const ItemDetail = ({item}) => {
    const [cant, setCant] = useState(1);
    const { cartList, showList, addToCart } = useCartContext();

    console.log(cartList);
    console.log(showList);

    const addOn = (count) => {
        setCant(count);
        addToCart({...item, quantity: count});
        alert(`La cantidad Agregada es: ${count}`);
    }

    return (
        <>
        <Card key={item.id} className="m-5 text-center">
            <Card.Header>{item.name}</Card.Header>
            <Card.Body>
            <Row>
                <Col className="w-50">
                    <Card.Img variant="top" src={item.foto} />
                </Col>
                <Col className="mt-5">
                    <Card.Title> <h2> $ {item.price} </h2></Card.Title>
                    <Card.Title className="m-5">
                        <ItemCount stock={item.stock} initial={cant} addOn={addOn}/>
                    </Card.Title>
                    <Card.Title className="m-3">
                        {item.detail}
                    </Card.Title>
                    <Card.Title className="mt-2">
                            <Link to='/'>
                                <Button variant="secondary" size="sm">Volver</Button>
                            </Link>
                    </Card.Title>
                </Col>
            </Row>
            </Card.Body>
            <Card.Footer className="text-muted"> {item.stock} productos disponibles </Card.Footer>
            </Card>
        </>
    )
}

export default ItemDetail
