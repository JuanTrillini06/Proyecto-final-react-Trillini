import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [cantidadCarrito, setCantidadCarrito] = useState(0);

    const agregarAlCarrito = (cantidad) => {
        setCantidadCarrito(prev => prev + cantidad);
    };

    return (
        <CarritoContext.Provider value={{ cantidadCarrito, agregarAlCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};