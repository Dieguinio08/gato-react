import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import '@styles/menu.css';
import MenuContext from '@context/MenuContext';
const Menu = () => {
    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };
    const {setOculto}=useContext(MenuContext);
    const{state}=useContext(MenuContext);
    const ocultarMenu= async ()=>{
        await sleep(10);
        setOculto(!state);
    }
    return (
        <div onTouchEnd={ocultarMenu}>
            <div className='submenu'>
                <ul >
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/medicamentos" >Medicamentos</Link></li>
                    <li><Link to="/aboutme" >Sobre mí</Link></li>
                </ul> 
            </div>
            <div className='fondo'>

            </div>
        </div>
    )
};
export default Menu;