import React, {useState, useContext} from 'react';
import Logo from './Logo';
import Contacto from './Contacto';
import Navbar from './Navbar';
import menu from '@images/menu.svg';
import Menu from '@components/Menu';
import MenuContext from '@context/MenuContext';
import styles from '@styles/Header.module.css';
import stylesMenu from '@styles/Menu.module.css';

const Header = () => {
    const {setOculto}=useContext(MenuContext);
    const{state}=useContext(MenuContext);
    const ocultarMenu=()=>{setOculto(!state);}
    return (
        <header className={styles.header}>
            <Logo/>   
            <Navbar/>
            <Contacto/>
            
            <img src={menu} alt="" className={stylesMenu.menuicon} onTouchEnd={ocultarMenu}/>     
            <div className={state? stylesMenu.mostrarmenu:stylesMenu.menuoculto}><Menu/></div>
        </header>
    )
};
export default Header;