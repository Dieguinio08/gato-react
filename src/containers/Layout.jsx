import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MenuContext from '@context/MenuContext';
import useOculto from '@hooks/useOculto';
import '@styles/main.css';
const Layout = ({children}) => {
    const oculto=useOculto();
    return (
        <div className='main'>
            <div className='cabecera'>
                <MenuContext.Provider value={oculto}>
                    <Header/> 
                </MenuContext.Provider>
            </div>
            <div className='cuerpo'>
                {children}
            </div>
            <div className='pie'>
                <Footer/>
            </div>
        </div>
    )
};
export default Layout;