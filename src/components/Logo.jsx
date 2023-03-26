import React from 'react';
import gato from '@images/logo.svg';
import style from '@styles/Logo.module.css';
import Image from 'next/image';

const Logo = () => {
    return (
        <ul className={style.Logo}>
            <li>
                <Image src={gato} alt="" />
            </li>
            <li>Un Gato Gritón</li>
        </ul>
    );
};
export default Logo;
