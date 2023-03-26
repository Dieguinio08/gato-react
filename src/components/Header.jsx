import React, { useContext } from 'react';
import Image from 'next/image';
import Logo from './Logo';
import Contacto from './Contacto';
import Navbar from './Navbar';
import menu from '@images/menu.svg';
import Menu from '@components/Menu';
import MenuContext from '@context/MenuContext';
import styles from '@styles/Header.module.css';

const Header = () => {
    const { setOculto } = useContext(MenuContext);
    const { state } = useContext(MenuContext);
    const ocultarMenu = () => {
        setOculto(!state);
    };
    return (
        <header className={styles.header}>
            <Logo />
            <Navbar />
            <Contacto />
            <Image src={menu} alt="" className={styles.menuicon} onTouchEnd={ocultarMenu} />
            <div className={state ? styles['mostrarmenu'] + ' ' + styles['menu'] : styles['menuoculto'] + ' ' + styles['menu']}>
                <Menu />
            </div>
        </header>
    );
};
export default Header;
