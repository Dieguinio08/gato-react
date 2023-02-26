import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MenuContext from '@context/MenuContext';
import useOculto from '@hooks/useOculto';

const Layout = ({children}) => {
    const oculto=useOculto();
    return (
        <div>
            <MenuContext.Provider value={oculto}>
                <Header/>
            </MenuContext.Provider>
            {children}
            <Footer/>
        </div>
    )
};
export default Layout;