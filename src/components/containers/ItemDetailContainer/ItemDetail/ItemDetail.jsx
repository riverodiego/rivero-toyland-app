import React, { useState } from 'react'
import ItemCount from '../../../Item/ItemCount'
import {Card, Button, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../../context/CartContext';
import LoadingComp from '../../../LoadingComp/LoadingComp';
import AlertMessage from '../../../AlertMessage/AlertMessage';

const ItemDetail = ({item}) => {
    const [cant, setCant] = useState(1);
    const [inputType, setInputType] = useState();
    const { addToCart, loadingBtn, LoadingBtn, modalShow, ModalShow } = useCartContext();

    const addOn = (count) => {
        setCant(count);
        addToCart({...item, quantity: count});
    }

    const handleChange = () => {
        setInputType("endBuy");
        }

    return (
        <>
        <Card key={item.id} className="m-5 text-center">
            <Card.Header>{item.name}</Card.Header>
            <Card.Body>
            <Row>
                <Col className="w-50">
                    <Card.Img style={{ minWidth: '9rem', maxWidth: '14rem', minHeight: '14rem', maxHeight: '24rem' }} variant="top" src={item.foto} />
                </Col>
                <Col className="mt-5">
                    <Card.Title> <h2> $ {item.price} </h2></Card.Title>
                    <Card.Title className="m-5 text-center">
                        { inputType === "endBuy" ? 
                            <>
                                <AlertMessage show={modalShow} onHide={() => ModalShow(false)}
                                titleMsg="Aviso del Carrito" bodyMsg={<h4> Se agrego: {cant} unidad(es) al carrito</h4>}
                                />
                                <Button as={Link} to='/cart' size="sm" variant="primary" className="mt-5">
                                    {loadingBtn ? <LoadingComp h="0" w="0.5vw" size="sm" title="Agregando..."/> : "Terminar la Compra"}
                                </Button> 
                            </>
                            :
                                <ItemCount stock={item.stock} initial={cant} addOn={addOn}
                                LoadingBtn={LoadingBtn} ModalShow={ModalShow} handleChange={handleChange}/>
                        }
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
