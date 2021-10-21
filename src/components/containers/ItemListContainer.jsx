import React from 'react'

export default function ItemListContainer({greeting, children}) {
    return (
        <div>
            {greeting}
            {children}
        </div>
    )
}
