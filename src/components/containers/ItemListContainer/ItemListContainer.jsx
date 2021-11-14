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
        if (id.includes('años') || id==='mayores'){
            console.log("contiene años en el parametro")
            getProducts
            .then( res => {        
                console.log('llamada a api control')
                setProduct(res.filter(prod => prod.age.includes(id)))
            })    
            .catch(err => console.log(err))
            .finally(()=> setTimeout(()=>setLoading(false),2000))
        }else{
        getProducts
        .then( res => {        
            console.log('llamada a api control')
            setProduct(res.filter(prod => prod.category=== id))
        })    
        .catch(err => console.log(err))
        .finally(()=> setTimeout(()=>setLoading(false),3000))
        }
    }else{
        getProducts
        .then( res => {        
            console.log('llamada a api')
            console.log(res)
            setProduct(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setTimeout(()=>setLoading(false),2000))
    }
},[id])

    return (
        <Row className="mx-0">
            <Col className="mt-5 text-center"> 
                {greeting}
                <h2>Lista de Juguetes Disponibles</h2>
                { id ? <h3> Categoria: {id} </h3> : <h3> Categoria: Todas </h3>}
                {loading ? <Loading h="20vh" w="0" size="lg" /> :<ItemList product={product}/>}
            </Col>
        </Row>
    )
}
