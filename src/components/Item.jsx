import React from 'react'
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

const Item = ({product}) => {
  return (
    <Card className='item-card'>
        <div className='item-image'>
            <img src="https://via.placeholder.com/200x300" alt="producto" />
        </div> 
        <div className='item-content'>
            <h2 className='item-title'>{product.title}</h2>
            <p className='item-description'>{product.description}</p>
            <div className='item-footer'>
                <span className='item-price'>{product.price}</span>
                <span className='item-stock'>{product.stock}</span>
                <span className='item-category'>{product.category}</span>
            </div>
        </div>
    </Card>
  )
}

export default Item