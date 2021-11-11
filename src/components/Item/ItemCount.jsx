import React, { useState } from 'react';
import {Button,InputGroup,FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import MessageAlert from '../MessageAlert/MessageAlert';

export default function ItemCount({stock, initial, addOn}) {
    const [count, setCount] = useState(initial);
    const [inputType, setInputType] = useState("addCart");
    const [hidecount, setHideCount] = useState();

    const handleChange = () => {

        setInputType("endBuy");
    }

    return (
        <>
            <InputGroup className="mx-auto text-center" style={{ width: '8rem', display: `${hidecount}` }} >
                <Button variant="outline-primary" size="sm" onClick={() => setCount(count-1)} disabled={count<2}>-</Button>
                <FormControl className="text-center" value={count} onChange={e => setCount(e.target.value)}/>
                <Button variant="outline-primary"  size="sm" onClick={() => setCount(count+1)} disabled={count===stock}>+</Button>
            </InputGroup>
            <div className="text-center" onClick={handleChange}>
                { inputType === "addCart" ? 
                    <>
                        <Button variant="success" size="sm" className="mt-2"
                            onClick={()=> {
                                addOn(count);
                                setHideCount('none');
                                // MessageAlert(true,`Cantidad Agregada: ${count}`,"Aviso Carrito")
                            }}>
                            Agregar al Carrito
                        </Button>
                    </>
                :
                <Button as={Link} to='/cart' size="sm" variant="primary" className="mt-2">
                        Terminar la Compra
                </Button> 
                }
            </div>
        </>
    )
}
