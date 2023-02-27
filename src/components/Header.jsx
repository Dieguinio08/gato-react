import React, {useState, useContext} from 'react';
import Logo from './Logo';
import Contacto from './Contacto';
import Navbar from './Navbar';
import '@styles/header.css';
import menu from '@images/menu.svg';
import whatsapp from '@images/whatsapp.svg';
import Menu from '@components/Menu';
import MenuContext from '@context/MenuContext';
import ReactWhatsapp from 'react-whatsapp';

const Header = () => {
    const {setOculto}=useContext(MenuContext);
    const{state}=useContext(MenuContext);
    const ocultarMenu=()=>{setOculto(!state);}
    return (
        <header className='header'>
            <Logo/>   
            <Navbar/>
            <Contacto/>
            <ReactWhatsapp number="542914146390" message="Hola, te escribo por el gato!">
                Enviar Whatsapp    
            </ReactWhatsapp>
            <img src={menu} alt="" className="menu-icon" onTouchEnd={ocultarMenu}/>     
            <div className={state?'menu mostrarmenu':'menu menuoculto'}><Menu/></div>
        </header>
    )
};
export default Header;