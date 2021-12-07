import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../../services/getFirestore';
import ItemList from './ItemList/ItemList';
import { useCartContext } from '../../../context/CartContext';
import LoadingComp from '../../LoadingComp/LoadingComp';
import { Row,Col } from 'react-bootstrap';

export default function ItemListContainer({greeting}) {

const [products, setProducts] = useState([])
const { loading, Loading } = useCartContext();
const { id } = useParams ();
const db = getFirestore()

useEffect(() => {

    const dbQueryAll = db.collection('items').get();
    const getProducts = (resp) => resp.docs.map(prod => ({id: prod.id, ...prod.data()}));

    if (id) {
        if (id.includes("años") || id==="mayores"){
            dbQueryAll
            .then(resp => setProducts(getProducts(resp).filter(prod=> prod.age.includes(id))))
            .catch(err => console.log("errAge:",err))
            .finally(() => setTimeout(()=>Loading(false),800))
        }else{
            const dbQueryCategory = db.collection('items').where('category','==',id).get()
            dbQueryCategory
            .then(resp => setProducts(getProducts(resp)))
            .catch(err => console.log("errCateg:",err))
            .finally(()=> setTimeout(()=>Loading(false),600))
        }
    }else{
        dbQueryAll
        .then(resp => setProducts(getProducts(resp)))
        .catch(err => console.log("errAll:",err))
        .finally(()=> setTimeout(()=>Loading(false),800))
    }

    return (Loading(true))
         //eslint-disable-next-line react-hooks/exhaustive-deps
},[id])

    return (
        <Row className="mx-0">
            <Col className="mt-5 text-center"> 
                {greeting}
                <h2>Lista de Juguetes Disponibles</h2>
                { id ? <h3> Categoria: {id} </h3> : <h3> Categoria: Todas </h3>}
                {loading ? <LoadingComp h="20vh" w="0" size="lg" /> :<ItemList product={products}/>}
            </Col>
        </Row>
    )
}
