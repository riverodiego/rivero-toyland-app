import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getProducts } from '../../../services/getProducts';
import ItemList from './ItemList/ItemList';
import Loading from '../../Loading/Loading';
import { Row,Col } from 'react-bootstrap';

export default function ItemListContainer({greeting}) {

const [product, setProduct] = useState([])
const [loading, setLoading] = useState(true)

const { id } = useParams ();

useEffect(() => {
    if (id) {
        getProducts
        .then( res => {        
            console.log('llamada a api')
            setProduct(res.filter(prod => prod.category=== id))
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }else{
        getProducts
        .then( res => {        
            console.log('llamada a api')
            setProduct(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }
},[id])

    return (
        <Row className="mx-0">
            <Col className="mt-5 text-center"> 
                {greeting}
                <h2>Lista de Juguetes Disponibles</h2>
                { id ? <h3> Categoria: {id} </h3> : <h3> Categoria: Todas </h3>}
                {loading ? <Loading/> :<ItemList product={product}/>}
            </Col>
        </Row>
    )
}
