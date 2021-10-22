import React from 'react'
import ItemContainer from './ItemContainer'

export default function ItemListContainer({greeting}) {

    return (
        <div>
            {greeting}
            <ItemContainer />
        </div>
    )
}
