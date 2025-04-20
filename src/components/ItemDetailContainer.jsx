import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/productService'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    useEffect(() => {
        getProducts()
            .then(products => {
                const foundProduct = products.find(p => p.id === parseInt(id))
                if (foundProduct) {
                    setProduct(foundProduct)
                } else {
                }
            })
            .catch(error => {
            })
    }, [id])
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer