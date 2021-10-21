import React, { useState } from 'react'
import {Button,InputGroup,FormControl} from 'react-bootstrap';

export default function ItemCount({stock,initial}) {
    const [contador, setContador] = useState(parseInt(initial))

    const handleClick=() =>{
        alert(`La cantidad agregada es ${contador}`)
        }

    const disminuirClick=() => {
        contador > 1 ? setContador(contador-1) : alert("NO PUEDE ELEGIR MENOR QUE 1")
    }

    const aumentarClick=() => {
        contador < parseInt(stock) ? setContador(contador+1) : alert(`EL STOCK DE ${stock} PRODUCTOS`)
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={disminuirClick}>-</Button>
                <FormControl className="text-center" aria-label="Example text with two button addons" value={contador}/>
                <Button variant="outline-primary" onClick={aumentarClick}>+</Button>
            </InputGroup>
            <Button variant="primary" onClick={handleClick}>Agregar al Carrito</Button>
        </div>
    )
}
