import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import FormOrder from '../FormOrder/FormOrder';
import { getFirestore, getToday, getDocId } from '../../services/getFirestore';
import LoadingComp from '../LoadingComp/LoadingComp';

const initialForm = {name: '', phone: '', email: ''};

function OrderBuy({idOrder, setIdOrder}) {

    const [formData, setFormData] = useState(initialForm)
    const [totalLastBuy, setTotalLastBuy] = useState(0)

    const { cartList, totalCart, removeAllCart, ModalShow, loading, Loading, IsCartEmpty } = useCartContext();

    const generateOrder = () =>{
        let order = {};
        order.date = getToday();
        order.buyer = formData;
        order.total = totalCart();
        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.quantity;
            
            return {id, nombre, precio}   
        })
        
        const dbQuery = getFirestore();
        const batch = dbQuery.batch();

        dbQuery.collection('orders').add(order)
        .then(resp => setIdOrder(resp.id))// mostrar id al usuario
        .catch(err=> console.log(err))
        .finally(()=> setFormData(initialForm),
                    setTotalLastBuy(totalCart()),
                    removeAllCart(),
                    ModalShow(true),
                    Loading(true)
                );
    
        //Actualiza todos los items que estan en el listado de Cart del CartContext
    
        const itemsToUpdate = dbQuery.collection('items').where(
            getDocId(), 'in', cartList.map(i=> i.id)
        );

        // por cada item restar del stock la cantidad del carrito
    
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).quantity
                    })
                })
            batch.commit()
                .catch(err => console.log("error al actualizar stock: ",err))
                .finally(setTimeout(()=>Loading(false),600))
        })
    }

    return (
        <>
        <FormOrder generateOrder={generateOrder} formData={formData} setFormData={setFormData}/>
        <section hidden={!IsCartEmpty()}>
                {loading ? 
                            <LoadingComp h="6vh" w="10vw" size="lg" title="Procesando compra..."/>
                        : 
                            <section className="text-center">
                                <h3>Su compra resulto exitosa</h3> <br/>
                                <h4>El id de su orden es : {idOrder}</h4> <br/>
                                <h4>El monto abonado por su compra fue:</h4> <br/>
                                <h4> <strong> $ {totalLastBuy} </strong> </h4> <br/>
                                <h5>¡Muchas Gracias por Elegirnos!</h5> <br/>
                            </section>
                }
        </section>
        </>
    )
}

export default OrderBuy