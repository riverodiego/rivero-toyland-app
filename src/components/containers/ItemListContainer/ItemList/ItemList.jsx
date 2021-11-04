import Item from '../../../Item/Item';

const ItemList = ({product}) => {

    return (
        <>
            {
                product.map(prod =>  <Item key={prod.id} name={prod.name}
                                    foto={prod.foto} price={prod.price} category={prod.category} id={prod.id}
                                    detail={prod.detail} stock={prod.stock}/>
                    )
            }
        </>
        )
    }

export default ItemList