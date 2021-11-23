import React from 'react'
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import LoadingComp from '../LoadingComp/LoadingComp';

function OrderBuy({generateOrder, handleChange, formData, idOrder}) {

    const { cartList, loading} = useCartContext();

    return (
        <>
            <h3 className="m-3" hidden={cartList.length > 0 ? false : true}>Formulario del Pedido</h3>
            <Form className="mx-5 px-5" hidden={cartList.length > 0 ? false : true}
                onSubmit={generateOrder}
                onChange={handleChange}
            >
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                        <Form.Control required type="text" name="name" placeholder="Name" defaultValue={formData.name}/>
                    </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Tel" className="mb-3">
                    <Form.Control required type="number" min="0" name="phone" placeholder="Telefono"  defaultValue={formData.phone}/>
                </FloatingLabel>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control required type="email" name="email" placeholder="name@example.com" defaultValue={formData.email}/>
                    </FloatingLabel>
                </Form.Group>
                <Button variant="success" type="submit" className="m-3" size="sm"> Confirmar</Button>
            </Form> 
            <section hidden={cartList.length > 0 ? true : false}>
                    {loading ? <LoadingComp h="6vh" w="12vw" size="lg" title="Procesando compra..."/> : 
                    <section className="text-center">
                    <h4>Su compra resulto exitosa</h4>
                    <h4>El id de su orden es : {idOrder}</h4>
                    </section>}
            </section>
        </>
    )
}

export default OrderBuy