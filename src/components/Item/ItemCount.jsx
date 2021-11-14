import React, { useState } from 'react';
import {Button,InputGroup,FormControl, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function ItemCount({stock, initial, addOn}) {

    const [ modalShow, setModalShow ] = useState(false);
    const [count, setCount] = useState(initial);
    const [inputType, setInputType] = useState();
    const [hidecount, setHideCount] = useState("visible");
    const [loading, setLoading] = useState(true)

    console.log("modalShow",modalShow)

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirmacion
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4> Se agrego: {count} unidad(es) al carrito</h4>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )}

        const handleChange = () => {
            setInputType("endBuy");
            }

    return (
        <>
            <InputGroup className="mx-auto text-center" style={{ width: '8rem', visibility: `${hidecount}` }} >
                <Button variant="outline-primary" size="sm" onClick={() => setCount(count-1)} disabled={count<2}>-</Button>
                <FormControl className="text-center" value={count} onChange={e => setCount(e.target.value)}/>
                <Button variant="outline-primary"  size="sm" onClick={() => setCount(count+1)} disabled={count===stock}>+</Button>
            </InputGroup>
            <div className="text-center" onClick={handleChange}>
                { inputType === "endBuy" ? 
                    <>
                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                        <Button as={Link} to='/cart' size="sm" variant="primary" className="mt-2">
                            {loading ? <Loading h="0" w="0.5vw" size="sm" title="Agregando..."/> : "Terminar la Compra"}
                        </Button> 
                    </>
                :
                    <Button variant="success" size="sm" className="mt-2"  onClick={()=> {
                            addOn(count);
                            setHideCount('hidden');
                            setTimeout(() =>{setLoading(false)},1000);
                            setTimeout(() =>{setModalShow(true)},1100);
                            }}>
                            Agregar al Carrito
                    </Button>
                }
            </div>
        </>
    )
}
