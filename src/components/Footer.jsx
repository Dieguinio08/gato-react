import React from 'react';
import '@styles/footer.css';
import github from '@images/github.svg';
import react from '@images/reactjs.svg';
import babel from '@images/babel.svg';
import webpack from '@images/webpack.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={react} alt="react" />
            <img src={babel} alt="babel" />
            <img src={webpack} alt="webpack" />
            <img src={github} alt="github" />
        </footer>
    )
};
export default Footer;