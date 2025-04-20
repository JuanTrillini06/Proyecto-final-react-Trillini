import React from 'react'
import {Badge} from 'primereact/badge'
import { useCarrito } from '../context/CarritoContext';
import 'primeicons/primeicons.css'
import '../css/style.css'

const CartWidget = () => {
  const { cantidadCarrito } = useCarrito();

  return (
    <div className='cart-widget'>
        <i className="pi pi-shopping-cart p-overlay-badge" style={{ fontSize: '1.5rem' }} >
            <Badge value={cantidadCarrito} severity="danger"></Badge>
        </i>
    </div>
  )
}

export default CartWidget