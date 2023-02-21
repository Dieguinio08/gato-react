import React from 'react';
import '@styles/home.css';
import gato from '@images/foto_gato.png';

const Home = () => {
    return (
        <article className='home'>
            <div className='container'>
                <div className='frase'>    
                    <div>Ya se que parezco un gato perdido y asustado, pero no es así... </div>
                    <div>Conoceme</div>
                </div>
            </div>
            
            <img src={gato} alt="Gato mas lindo del mundo" />
        </article>
    )
};
export default Home;