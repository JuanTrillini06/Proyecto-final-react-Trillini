import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/productService'
import ItemListCategory from './ItemListCategory'

const ItemCategoryContainer = () => {
    const { categoria } = useParams()
    const [products, setProduct] = useState([])

    useEffect(() => {
        getProducts()
            .then(products => {
                const foundProduct = products.filter(p => p.categoria === categoria)
                if (foundProduct) {
                    setProduct(foundProduct)
                } else {
                }
            })
            .catch(error => {
            })
    }, [categoria])
    return (
        <div>
            <ItemListCategory products={products} />
        </div>
    )
}

export default ItemCategoryContainer