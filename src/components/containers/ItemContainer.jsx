import React from 'react'
import ItemCount from './ItemCount'
import {Card} from 'react-bootstrap';

export default function ItemContainer() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/image/logo_tienda_med.png" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <ItemCount stock="8" initial="1"/>
        </Card.Body>
        </Card>
    )
}
