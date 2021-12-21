import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../../services/getFirestore';
import ItemDetail from './ItemDetail/ItemDetail'
import { useCartContext } from '../../../context/CartContext';
import LoadingComp from '../../LoadingComp/LoadingComp';
import { Row,Col } from 'react-bootstrap';

const ItemDetailContainer = ({greeting}) => {

const [item, setItem] = useState([])
const { loading, Loading, LoadingBtn } = useCartContext();
const { id } = useParams ();
const db = getFirestore()

useEffect(() => {

    if (id) {
        const dbQueryItem = db.collection('items').doc(id).get()
        dbQueryItem
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log("errId",err))
        .finally(setTimeout(()=>Loading(false),600))
    }
    return(
        Loading(true),
        LoadingBtn(true)
    )
//eslint-disable-next-line react-hooks/exhaustive-deps
},[id])

    return (
        <Row className="mx-0">
            <Col className="mt-2 text-center"> 
                {greeting}
                <h2>Detalle del producto</h2>
                <h3>Id {item.id}</h3>
                {loading ? <LoadingComp my="20vh" mx="0" size="lg"/> : <ItemDetail item={item}/>}
            </Col>
        </Row>
    )
}

export default ItemDetailContainer

