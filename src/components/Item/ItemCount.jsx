import React, { useState, useEffect } from 'react';
import {Button,InputGroup,FormControl} from 'react-bootstrap';

export default function ItemCount({stock,initial,addOn}) {
    const [contador, setContador] = useState(initial)
    const [plural, setPlural] = useState()

    useEffect(() => {
        contador === 1 ? setPlural("") : setPlural("es");
    },[contador]);

    const onDecrease=() => {
        contador > 1 ? setContador(contador-1) : console.log("NO PUEDE ELEGIR MENOR QUE 1")
    }

    const onIncrease=() => {
        contador < stock ? setContador(contador+1) : console.log(`EL STOCK DE ${stock} PRODUCTOS`)
    }

    return (
        <>
            <InputGroup className="m-3">
                <Button variant="outline-primary" size="sm" onClick={onDecrease} disabled={contador<2}>-</Button>
                <FormControl className="text-center" value={contador} onChange={e => setContador(e.target.value)}/>
                <Button variant="outline-primary" onClick={onIncrease} disabled={contador===stock}>+</Button>
            </InputGroup>
                { addOn(`Agrego: ${contador} unidad${plural} al carrito`,'Agregar al carrito','Mensajeria del Carrito')}
        </>
    )
}
