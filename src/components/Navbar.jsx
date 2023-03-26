import React from 'react';
import Link from 'next/link';
import styles from '@styles/Navbar.module.css';

const Navbar = () => {
    return (
        <ul className={styles.navbar}>
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
    );
};
export default Navbar;
