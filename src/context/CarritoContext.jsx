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

    const eliminarDelCarrito = (productId) => {
        setCarrito(prevCarrito => prevCarrito.filter(product => product.id !== productId));
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, calcularTotal, eliminarDelCarrito, cantidadCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

