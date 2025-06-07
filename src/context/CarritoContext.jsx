import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (product, cantidadSeleccionada) => {
        setCarrito(prevCarrito => {
            const existeProducto = prevCarrito.find(item => item.id === product.id);
            
            if (existeProducto) {
                return prevCarrito.map(item =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + cantidadSeleccionada }
                        : item
                );
            } else {
                return [...prevCarrito, { 
                    id: product.id, 
                    title: product.title, 
                    price: product.price, 
                    cantidad: cantidadSeleccionada 
                }];
            }
        });
    };

    const cantidadCarrito =  carrito.reduce((cantidadTotal, product) => cantidadTotal + product.cantidad, 0);

    const calcularTotal = () => {
        return carrito.reduce((total, product) => total + (product.price * product.cantidad), 0);
    };

    const incrementarCantidad = (productId) => {
    setCarrito(prevCarrito => 
        prevCarrito.map(product => 
            product.id === productId 
                ? { ...product, cantidad: product.cantidad + 1 } 
                : product
        )
    );
};

const decrementarCantidad = (productId) => {
    setCarrito(prevCarrito => 
        prevCarrito.map(product => 
            product.id === productId && product.cantidad > 1
                ? { ...product, cantidad: product.cantidad - 1 }
                : product
        ).filter(product => product.cantidad > 0) // Elimina productos con cantidad 0
    );
};

const eliminarDelCarrito = (productId, cantidadAEliminar) => {
    setCarrito(prevCarrito => {
        return prevCarrito.map(product => {
            if (product.id === productId) {
                const nuevaCantidad = product.cantidad - cantidadAEliminar;
                return nuevaCantidad > 0 
                    ? { ...product, cantidad: nuevaCantidad } 
                    : null; // Si la cantidad es 0, lo eliminamos
            }
            return product;
        }).filter(product => product !== null); // Filtramos los productos eliminados
    });
};

    const eliminarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, calcularTotal, eliminarDelCarrito, eliminarCarrito, incrementarCantidad, decrementarCantidad, cantidadCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

