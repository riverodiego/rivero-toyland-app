import {useEffect, useState} from 'react';
import { getProducts } from '../services/getProducts';
import Item from './Item';
import Loading from './Loading';

const ItemList = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts
        .then( res => {        
            console.log('llamada a api')
            setProduct(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])   
  
    return (
        <>
           <h2>Lista de Juguetes Disponibles</h2>
            
            { loading ? <Loading/> :
                    product.map(prod=> <Item key={prod.id} name={prod.name} foto={prod.foto} price={prod.price} />)
            }
        </>
        )
    }

export default ItemList