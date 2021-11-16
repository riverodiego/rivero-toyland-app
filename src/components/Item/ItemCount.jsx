import React, { useState } from 'react';
import {Button,InputGroup,FormControl} from 'react-bootstrap';

export default function ItemCount({stock, initial, addOn, setLoading, setModalShow, handleChange}) {
    const [count, setCount] = useState(initial);
        
    return (
        <>
            <InputGroup className="mx-auto text-center" style={{ width: '8rem' }} >
                <Button variant="outline-primary" size="sm" onClick={() => setCount(count-1)} disabled={count<2}>-</Button>
                <FormControl className="text-center" value={count} onChange={e => setCount(e.target.value)}/>
                <Button variant="outline-primary"  size="sm" onClick={() => setCount(count+1)} disabled={count===stock}>+</Button>
            </InputGroup>
            <Button variant="success" size="sm" className="mt-2"  onClick={()=> {
                    addOn(count);
                    handleChange();
                    setTimeout(() =>{setLoading(false)},600);
                    setTimeout(() =>{setModalShow(true)},700);
                    }}>
                    Agregar al Carrito
            </Button>
        </>
    )
}
