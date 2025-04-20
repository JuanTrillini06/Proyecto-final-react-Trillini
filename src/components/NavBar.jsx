import React, { useState } from 'react'
import CartWidget from './CartWidget'
import { Dropdown } from 'primereact/dropdown'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import '../css/style.css'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../assets/TiendaIcono.png'

const Navbar = () => {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const navigate = useNavigate();

    const categorias = [
        { name: 'Hombre', code: 'Hombre' },
        { name: 'Adolescente', code: 'Adolescente' },
        { name: 'Niño', code: 'Niño' }
    ];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.value);
        if (e.value) {
            navigate(`/category/${e.value.code}`);
        }
    };

    return (
        <nav className="navbar">
            <Link to={"home"}>  
                <div>  
                    <img className='logo' src={logo} alt="Logo de la marca" />
                </div>
            </Link>
            <Link to={"home"}>  
                <div className="store-name">  
                    <h1>Juandrobe</h1>
                </div>
            </Link>
            <div className="nav-controls">
                <div className="dropdown-container">
                    <Dropdown
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        options={categorias}
                        optionLabel="name"
                        placeholder="Categoria"
                        className="w-full md:w-14rem dropdown"
                    />
                </div>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>    
            </div>
        </nav>
    )
}

export default Navbar