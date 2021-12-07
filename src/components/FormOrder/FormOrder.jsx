import React, { useState } from 'react'
import { Form, FloatingLabel, Button, Alert } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

function FormOrder({generateOrder, formData, setFormData}) {
    
    const [mostrar, setMostrar] = useState(false)
    const [emailVerify, setEmailVerify] = useState('')
    const { IsCartEmpty, totalCart } = useCartContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.email === emailVerify ? generateOrder() : setMostrar(true)
    };

    const handleChange=(e)=>{
        e.target.name === "emailverify" ? setEmailVerify(e.target.value)
                                        :
                                        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    return (
        <>
        <h3 className="m-3" hidden={IsCartEmpty()}>Formulario del Pedido</h3>
        <Form className="mx-5 px-5" hidden={IsCartEmpty()}
            onSubmit={handleSubmit}
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
                <FloatingLabel controlId="floatingInput" label="Confirm Email address" className="mb-3">
                    <Form.Control required type="email" name="emailverify" placeholder="name@example.com" defaultValue={emailVerify}/>
                </FloatingLabel>
            </Form.Group>
            <Alert variant="danger" className="d-inline-flex m-0 p-0" show={mostrar} >Los mails no coinciden </Alert>
            <h4 className="m-3 text-center">Total a pagar: <strong> $ {totalCart()} </strong> </h4>
            <Button variant="success" type="submit" className="m-3" size="md"> Confirmar</Button>
        </Form>   
        </>
    )
}

export default FormOrder
