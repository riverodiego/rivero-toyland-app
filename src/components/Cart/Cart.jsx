import React, {useState} from 'react'
import {useCartContext} from '../../context/CartContext'
import { Button, Card, Alert, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from "firebase"
import 'firebase/firestore'
import { getFirestore } from '../../services/getFirestore';
import AlertMessage from '../AlertMessage/AlertMessage';
import OrderBuy from '../OrderBuy/OrderBuy';

export default function Cart() {
    const [idOrder, setIdOrder] = useState('')

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email: ''
    })
    
    const { cartList, removeItem, removeAllCart, totalCart, modalShow, ModalShow, Loading } = useCartContext();

    const generateOrder = (e) =>{
        e.preventDefault()        
        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());    
        console.log("formData", formData);
        order.buyer = formData;
        order.total = totalCart();
        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.quantity;
            
            return {id, nombre, precio}   
        })
        
        const dbQuery = getFirestore()

        dbQuery.collection('orders').add(order)
        .then(resp => setIdOrder(resp.id))// mostrar id al usuario
        .catch(err=> console.log(err))
        .finally(()=> setFormData({
                    name:'',
                    phone:'',
                    email: ''
                }),
                    removeAllCart(),
                    ModalShow(true),
                    Loading(true)
                )
    
        //Actualiza todos los items que estan en el listado de Cart del CartContext
    
        const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id)
        )
    
        const batch = dbQuery.batch();
        
        // por cada item restar del stock la cantidad de el carrito
    
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).quantity
                })
            })
    
            batch.commit().then(res =>{
                console.log('resultado batch:', res);
                setTimeout(()=>Loading(false),600)
            })
        })
    }

    const handleChange=(e)=>{
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <h1>Seccion Carrito</h1>
            <h3 className="m-3" hidden={cartList.length > 0 ? false : true}>Listado de productos agregados</h3>
            <Table striped bordered hover  hidden={cartList.length > 0 ? false : true}>
                <thead>
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio Un</th>
                        <th>Cant</th>
                        <th>Subtotal</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(prod => <tr key={prod.id} className="p-3 m-2 text-center shadow"> 
                                            <td> {prod.id} </td>
                                            <td> <Card.Img variant="top" style={{ maxWidth: '4rem', maxHeight: '4rem' }} src={prod.foto} /> </td>
                                            <td className="w-25"> {prod.name} </td>
                                            <td> $ {prod.price} </td>
                                            <td> {prod.quantity} </td>
                                            <td className="text-end"> $ {prod.quantity*prod.price} </td>
                                            <td> <Button variant="primary" size="sm" onClick={() => removeItem(prod.id)} >Eliminar</Button> </td>
                                        </tr> )}
                                        <tr>
                                            <th colSpan="5"className="fs-5 text-end">
                                                    Total de la Compra:
                                            </th>
                                            <th colSpan="1" className="fs-5 text-end">
                                                    $ {totalCart()}
                                            </th>
                                            <th>
                                                <Button variant="danger"  size="sm" onClick={() => removeAllCart()} 
                                                hidden={cartList.length > 0 ? false : true}> Eliminar Todo</Button>
                                            </th>
                                        </tr>
                </tbody>
            </Table>
            <section className="m-5 text-center" >
                <section hidden={cartList.length > 0 ? false : true}>
                    <AlertMessage show={modalShow} onHide={() => ModalShow(false)}
                        titleMsg="Orden de Compra" bodyMsg={<OrderBuy generateOrder={generateOrder} handleChange={handleChange} formData={formData} idOrder={idOrder}/>}
                    />
                        <Button variant="success" className="m-3" size="sm" onClick={() => ModalShow(true)} > Generar Pedido</Button>
                </section>
                <Alert variant={"light"} className="p-3 m-3 text-center" hidden={cartList.length > 0 ? true : false}> 
                    {idOrder!=='' ? <h4>El id de su orden es : {idOrder} </h4> 
                                            : 
                                            <>
                                            <h3>Carrito Vacio</h3>
                                            No hay productos seleccionados...
                                            </>}
                </Alert>
                <Link to='/'>
                        <Button variant="secondary" className="mx-2" size="sm">Ir a los Productos</Button>
                </Link>
            </section>
        </>
    )
}
