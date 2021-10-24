import React from 'react'
import ItemList from '../ItemList';

export default function ItemListContainer({greeting}) {

    return (
        <>
            {greeting}
            <ItemList/>
        </>
    )
}
