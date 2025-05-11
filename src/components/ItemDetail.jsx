import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ItemCount from './ItemCount';
import '../css/style.css';
import { Link } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Spin } from 'antd';

const ItemDetail = () => {
    const { id } = useParams(); // Captura el ID desde la URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para manejar carga

    useEffect(() => {
        async function fetchProduct() {
            try {
                const db = getFirestore();
                const productRef = doc(db, "products", id);
                const productSnap = await getDoc(productRef);

                if (productSnap.exists()) {
                    setProduct({ id: productSnap.id, ...productSnap.data() });
                } else {
                    console.log("Producto no encontrado");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) {
        return <Spin />;
    }

    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <Card className="item-detail-card">
            <div className="item-detail-content">
                <div className="item-detail-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="item-detail-info">
                    <h1 className="item-detail-title">{product.title}</h1>
                    <p className="item-detail-description">{product.description}</p>
                    <div className="item-detail-price">${product.price}</div>
                    <div className="item-detail-actions">
                        <ItemCount product={product} />
                        <Link to="/home">
                            <Button className="p-button-rounded" label="Volver" severity="danger" outlined />
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ItemDetail;