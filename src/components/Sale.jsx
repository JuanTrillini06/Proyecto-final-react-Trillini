import React from 'react'
import {Card} from 'primereact/card';
import '../css/style.css';
import { Link } from 'react-router-dom';

const Sale = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
        <Card className='sale-card' style={{ backgroundImage: `url(../../public/sale.png)` }}>
            <div >    
            <div className='sale-content'>
                <h1>SALE!</h1>
                <h2 className='sale-title'>{product.title}</h2>
                <p>Aprovecha este producto y más con descuento!!</p>
            </div>
            </div>
        </Card>
    </Link>    
    
  )
}

export default Sale