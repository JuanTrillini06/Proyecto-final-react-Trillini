import React, { useState } from "react";
import { Menu, Badge } from "antd";
import { ShoppingCartOutlined, HomeOutlined, } from "@ant-design/icons";
import Carrito from "./Carrito";
import "../css/style.css"
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;

const Navbar = () => {

    const handleClick = (e) => {
        console.log("Elemento seleccionado:", e.key);
    };

    return (
        <div className="navbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Menu className="navbar" onClick={handleClick} mode="horizontal" style={{ flex: 1 }}>
                <Link to={"home"}>
                <Menu.Item key="home" ><HomeOutlined></HomeOutlined></Menu.Item>
                </Link>
                <SubMenu title="Categoria">
                    <Menu.Item key="Hombre">Hombre</Menu.Item>
                    <Menu.Item key="Adolescente">Adolescente</Menu.Item>
                    <Menu.Item key="Ninio">Niño</Menu.Item>
                </SubMenu>
                <Menu.Item key="about">Acerca de</Menu.Item>
            </Menu>
            <div style={{ marginRight: 16 }}>
                <Carrito></Carrito>
            </div>
        </div>
    );
};

export default Navbar;