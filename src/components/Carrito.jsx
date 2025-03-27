import React, { useState } from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Carrito = () => {
    const [cartItems, setCartItems] = useState(0); // Estado para el número de elementos en el carrito

    // Función para aumentar el número de elementos (puedes adaptarla según tu lógica)
    const addToCart = () => {
        setCartItems(cartItems + 1);
    };

    return (
        <div style={{ cursor: "pointer" }} onClick={addToCart}>
            <Badge count={cartItems} showZero>
                <ShoppingCartOutlined style={{ fontSize: 24 }} />
            </Badge>
        </div>
    );
};

export default Carrito;
