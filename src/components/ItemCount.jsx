import React, { useState } from 'react'
import {Button,InputGroup,FormControl} from 'react-bootstrap';

export default function ItemCount({stock,initial,addOn}) {
    const [contador, setContador] = useState(initial)

    const onDecrease=() => {
        contador > 1 ? setContador(contador-1) : console.log("NO PUEDE ELEGIR MENOR QUE 1")
    }

    const onIncrease=() => {
        contador < stock ? setContador(contador+1) : console.log(`EL STOCK DE ${stock} PRODUCTOS`)
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={onDecrease} disabled={contador<2}>-</Button>
                <FormControl className="text-center" value={contador} onChange={e => setContador(e.target.value)}/>
                <Button variant="outline-primary" onClick={onIncrease} disabled={contador===stock}>+</Button>
            </InputGroup>
                <Button variant="primary" onClick={()=>{addOn(contador)}} size="sm">Agregar al Carrito</Button>
        </>
    )
}
