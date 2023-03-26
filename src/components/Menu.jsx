import React, { useContext } from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.css';
import MenuContext from '@context/MenuContext';
const Menu = () => {
    const sleep = async (milliseconds) => {
        await new Promise((resolve) => {
            return setTimeout(resolve, milliseconds);
        });
    };
    const { setOculto } = useContext(MenuContext);
    const { state } = useContext(MenuContext);
    const ocultarMenu = async () => {
        await sleep(10);
        setOculto(!state);
    };
    return (
        <div onTouchEnd={ocultarMenu}>
            <div className={styles.submenu}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/medicamentos">Medicamentos</Link>
                    </li>
                    <li>
                        <Link href="/aboutme">Sobre mí</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.fondo}></div>
        </div>
    );
};
export default Menu;
