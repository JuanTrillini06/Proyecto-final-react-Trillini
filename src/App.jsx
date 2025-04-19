import { React } from 'react'
import './css/style.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <PrimeReactProvider>
      <BrowserRouter>
      <div className="app">
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<ItemListContainer/>} />
        </Routes>
      </div>
      </BrowserRouter> 
    </PrimeReactProvider>
  )
}

export default App
