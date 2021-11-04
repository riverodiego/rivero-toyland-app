import { useEffect, useState } from 'react'
import { getProducts } from '../../../services/getProducts'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import Loading from '../../Loading/Loading';
import { Row,Col } from 'react-bootstrap';

const ItemDetailContainer = ({greeting}) => {

const [item, setItem] = useState([])
const [loading, setLoading] = useState(true)

const { id } = useParams ();

useEffect(() => {
        getProducts
        .then( res => {        
            console.log('llamada a api')
            setItem(res.find(prod => prod.id === parseInt(id)))
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
},[id])

    return (
        <Row className="mx-0">
            <Col className="mt-2 text-center"> 
                {greeting}
                <h2>Detalle del producto Nro: {item.id}</h2>
                {loading ? <Loading/> :<ItemDetail item={item}/>}
            </Col>
        </Row>
    )
}

export default ItemDetailContainer

