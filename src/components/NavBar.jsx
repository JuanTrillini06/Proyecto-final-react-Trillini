import React, { useState } from "react";
import { Menu, Badge } from "antd";
import { ShoppingCartOutlined, HomeOutlined, } from "@ant-design/icons";

const { SubMenu } = Menu;

const Navbar = () => {
    const [cartItems] = useState(5);

    const handleClick = (e) => {
        console.log("Elemento seleccionado:", e.key);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Menu onClick={handleClick} mode="horizontal" style={{ flex: 1 }}>
                <Menu.Item key="home" ><HomeOutlined></HomeOutlined></Menu.Item>
                <SubMenu title="Categoria">
                    <Menu.Item key="men">Hombre</Menu.Item>
                    <Menu.Item key="boy">Adolescente</Menu.Item>
                    <Menu.Item key="children">Niño</Menu.Item>
                </SubMenu>
                <Menu.Item key="about">Acerca de</Menu.Item>
            </Menu>
            <div style={{ marginRight: 16 }}>
                <Badge count={cartItems} showZero>
                    <ShoppingCartOutlined style={{ fontSize: 24 }} />
                </Badge>
            </div>
        </div>
    );
};

export default Navbar;