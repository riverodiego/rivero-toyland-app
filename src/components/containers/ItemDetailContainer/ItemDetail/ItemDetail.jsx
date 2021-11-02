import React from 'react'
import ItemCount from '../../../Item/ItemCount'
import {Card, Button} from 'react-bootstrap';
import MessageAlert from '../../../MessageAlert/MessageAlert';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    return (
        <>
            <Card key={item.id} style={{ width: '18rem' }} className="mt-2 text-center">
            <Card.Header>{item.name}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={item.foto} />
                <Card.Title> $ {item.price}</Card.Title>
                <Card.Text className="m-3">
                    <ItemCount stock={item.stock} initial={1} addOn={MessageAlert}/>
                </Card.Text>
                <Card.Text className="m-2">
                    <Link to='/'>
                        <Button variant="secondary" size="sm">Volver</Button>
                    </Link>
                </Card.Text>
                <Card.Text className="mt-3">
                    {item.detail}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"> {item.stock} productos disponibles </Card.Footer>
            </Card>
        </>
    )
}

export default ItemDetail
