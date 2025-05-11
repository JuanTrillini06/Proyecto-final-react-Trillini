import React, { useState} from 'react'
import Item from './Item'
import '../css/style.css'

const ItemListCategory = ({ products }) => {
          
  return (
    <div className='item-list-container'>
        {
            products.map((product) => {
                return(
                     <Item key={product.id} product={product}/>
                )
            })
        }
    </div>
  )
}

export default ItemListCategory