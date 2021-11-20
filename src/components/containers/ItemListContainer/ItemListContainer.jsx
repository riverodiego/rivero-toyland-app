import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../../services/getFirestore';
import ItemList from './ItemList/ItemList';
import Loading from '../../Loading/Loading';
import { Row,Col } from 'react-bootstrap';

export default function ItemListContainer({greeting}) {

const [products, setProducts] = useState([])
const [aux, setAux] = useState([])
const [loading, setLoading] = useState(true)

const { id } = useParams ();

const db = getFirestore()

//IMPORTADOR DE JSON
//const data = require('../../../Products.json')
//const incorp = () => {data.map(prod => db.collection('items').add(prod))};

useEffect(() => {
    
    if (id) {
        if (id.includes("años") || id==="mayores"){
            const dbQueryAge = db.collection('items').get()
            dbQueryAge
            //trabajo con una variable auxiliar para poder despues filtrar el array asyncronico
            .then(resp => setAux(resp.docs.map(prod => ({id: prod.id, ...prod.data()})), ...aux),
                        setProducts(aux.filter(prod => prod.age.includes(id)))
                    )
            .catch(err => console.log(err))
            .finally(() => setTimeout(()=>setLoading(false),800))
        }else{
            const dbQueryCategory = db.collection('items').where('category','==',id).get()
            dbQueryCategory
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()})), ...products))
            .catch(err => console.log(err))
            .finally(()=> setTimeout(()=>setLoading(false),600))
        }
    }else{
        const dbQueryAll = db.collection('items').get()
        dbQueryAll
        .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()})), ...products))
        .catch(err => console.log(err))
        .finally(()=> setTimeout(()=>setLoading(false),800))
    }

    return (
        setLoading(true)
    )

         //eslint-disable-next-line react-hooks/exhaustive-deps
},[id])

    return (
        <Row className="mx-0">
            <Col className="mt-5 text-center"> 
                {greeting}
                <h2>Lista de Juguetes Disponibles</h2>
                { id ? <h3> Categoria: {id} </h3> : <h3> Categoria: Todas </h3>}
                {loading ? <Loading h="20vh" w="0" size="lg" /> :<ItemList product={products}/>}
            </Col>
        </Row>
    )
}
