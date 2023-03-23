import React from 'react';
import gato from '@images/logo.svg';
import style from'@styles/Logo.module.css';

const Logo = () => {
    return (
        <ul className={style.logo}>
            <li><img src={gato} alt="" /></li>
            <li>Un Gato Gritón</li>
        </ul>
    )
};
export default Logo;