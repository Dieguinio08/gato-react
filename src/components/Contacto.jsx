import React from 'react';
import '@styles/contacto.css';
import ReactWhatsapp from 'react-whatsapp';
import whatsapp from '@images/whatsapp.svg';
const Contacto = () => {
    return (
        <div className='contacto'>
            <ReactWhatsapp element="div" number="542914146390" message="Hola, te escribo por el gato!">  
                <img src={whatsapp} alt="" />
            </ReactWhatsapp> 
            <p >Contacto +54 291 4146390</p>
            <p>Mitre 1338</p>
        </div>
    )
};
export default Contacto;