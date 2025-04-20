import React from 'react'
import Navbar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCategoryContainer from './components/ItemCategoryContainer';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as router, Route, Routes, BrowserRouter} from 'react-router-dom';
import "./css/style.css"
import { CarritoProvider } from './context/CarritoContext';


const App = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <div className='app'>
          <CarritoProvider>
          <Navbar />
          <Routes>
            <Route path="/home" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoria" element={<ItemCategoryContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          </CarritoProvider>
        </div>
      </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
