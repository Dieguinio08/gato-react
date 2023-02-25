import React from 'react';
import Logo from './Logo';
import Contacto from './Contacto';
import Navbar from './Navbar';
import '@styles/header.css';
import menu from '@images/menu.svg';

const Header = () => {
    return (
        <header className='header'>
            <Logo/>   
            <Navbar/>
            <Contacto/>
            <img src={menu} alt="" className="menu-icon"/>         
        </header>
    )
};
export default Header;