import React from 'react';
import { Link } from "react-router-dom";
import styles from '@styles/Navbar.module.css';

const Navbar = () => {
    return (
        <ul className={styles.navbar}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/medicamentos">Medicamentos</Link>
            </li>
            <li>
                <Link to="/aboutme">Sobre mí</Link>
            </li>
        </ul>
    )
};
export default Navbar;