import React, { useState } from 'react'
import {Button,InputGroup,FormControl} from 'react-bootstrap';

export default function ItemCount({stock,initial,addOn}) {
    const [contador, setContador] = useState(initial)

    const disminuirClick=() => {
        contador > 1 ? setContador(contador-1) : console.log("NO PUEDE ELEGIR MENOR QUE 1")
    }

    const aumentarClick=() => {
        contador < stock ? setContador(contador+1) : console.log(`EL STOCK DE ${stock} PRODUCTOS`)
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={disminuirClick} disabled={contador<2}>-</Button>
                <FormControl className="text-center" aria-label="Example text with two button addons" value={contador}/>
                <Button variant="outline-primary" onClick={aumentarClick} disabled={contador===stock}>+</Button>
            </InputGroup>
            <Button variant="primary" onClick={()=>{addOn(contador)}}>Agregar al Carrito</Button>
        </div>
    )
}
