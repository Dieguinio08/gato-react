import React from 'react';
import gato from '@images/logo.svg';
import '@styles/logo.css';

const Logo = () => {
    return (
        <ul className='Logo'>
            <li><img src={gato} alt="" /></li>
            <li>Un Gato Gritón</li>
        </ul>
    )
};
export default Logo;