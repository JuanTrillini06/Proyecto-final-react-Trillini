import { useState } from 'react';
import { Button } from 'primereact/button';
import { useCarrito } from '../context/CarritoContext';
import '../css/style.css';

const ItemCount = ({ setCantidad }) => {
    const [counter, setCounter] = useState(1);
    const { agregarAlCarrito } = useCarrito();

    const handleAgregar = () => {
        agregarAlCarrito(counter);
        setCounter(1);
    };


    return (
        <div className='item-count-container'>
            <div className='counter-buttons'>
                <Button
                    className='boton'
                    icon='pi pi-minus'
                    severity='info'
                    rounded
                    text
                    onClick={() => setCounter(prev => Math.max(prev - 1, 1))}
                />
                <span className='counter-value'>{counter}</span>
                <Button
                    className='boton'
                    icon='pi pi-plus'
                    severity='info'
                    rounded
                    text
                    onClick={() => setCounter(prev => prev + 1)}
                />
            </div>
            <Button
                label="Agregar al carrito"
                severity="success"
                raised
                className="p-button-rounded"
                onClick={handleAgregar}
            />
        </div>
    );
};

export default ItemCount;