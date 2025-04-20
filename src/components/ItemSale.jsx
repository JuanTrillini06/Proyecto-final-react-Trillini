import React from 'react'
import { Carousel } from 'antd';
import Sale from './Sale';
import '../css/style.css';

const Home = ({products}) => {
    const productosEnOferta = products.filter(product => product.oferta);
  return (
    <div>
      <h1></h1>
      <Carousel className='carrusel-sale' autoplay autoplaySpeed={3500}>
        {productosEnOferta.length > 0 ? (
          productosEnOferta.map((product) => (
            <div key={product.id}>
              <Sale product={product} />
            </div>
          ))
        ) : (
          <p>No hay productos en oferta en este momento.</p>
        )}
      </Carousel>
      </div>
    );
  }

export default Home