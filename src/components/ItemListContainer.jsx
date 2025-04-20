import React, { useState, useEffect } from 'react'
import ItemSale from './ItemSale'
import ItemList from './ItemList'
import { getProducts } from '../services/productService'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
            });
    }, []);
    
  return (
        <div >
            <ItemSale products={products}/>
            <ItemList products={products} />
        </div>
  )
}

export default ItemListContainer