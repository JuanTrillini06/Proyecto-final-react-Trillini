import React, { useState, useEffect } from 'react'
import ItemSale from './ItemSale'
import ItemList from './ItemList'
import { getProducts } from '../services/productService'
import { Spin } from 'antd';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products);
                setLoading(false);
            })
            .catch(error => {
            });
    }, []);
    
    if (loading) {
        return <Spin />;
    }

  return (
        <div >
            <ItemSale products={products}/>
            <ItemList products={products} />
        </div>
  )
}

export default ItemListContainer