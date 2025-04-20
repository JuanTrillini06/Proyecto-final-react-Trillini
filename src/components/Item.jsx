import React from 'react'
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import '../css/style.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Card className='item-card'>
        <div className='item-image'>
            <img src={product.image} alt={product.title} />
        </div> 
        <div className='item-content'>
            <h2 className='item-title'>{product.title}</h2>
            <p className='item-description'>{product.description}</p>
            <div className='item-footer'>
                <span className='item-price'>{product.price}</span>
                <Link to={`/product/${product.id}`}>
                    <Button label='Detalle' severity='success' raised className='p-button-rounded' />
                </Link>
            </div>
        </div>
    </Card>
  )
}

export default Item