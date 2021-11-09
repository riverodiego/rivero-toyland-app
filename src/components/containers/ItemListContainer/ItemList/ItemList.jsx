import Item from '../../../Item/Item';

const ItemList = ({product}) => {

    return (
        <div className="d-flex flex-wrap justify-content-start">
            {
                product.map(prod =>
                            <Item key={prod.id} name={prod.name}
                                foto={prod.foto} price={prod.price} category={prod.category} id={prod.id}
                                detail={prod.detail} stock={prod.stock}/>
                    )
            }
        </div>
        )
    }

export default ItemList