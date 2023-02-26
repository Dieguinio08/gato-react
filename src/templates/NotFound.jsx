import React from 'react';
import '@styles/notfound.css';
import gato from '@images/gato3.png';

const NotFound = () => {
    return (
        <div className='notFound'>
        <article>
            <h1>Pagina no encontrada</h1>
            <p>No humano, esta página no existe</p>
            <img src={gato} alt="" />
        </article>
    </div>
    )
};
export default NotFound;