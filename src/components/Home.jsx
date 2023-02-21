import React from 'react';
import '@styles/home.css';
import gato from '@images/foto_gato.png';

const Home = () => {
    return (
        <article className='home'>
            <p>
                <div className='frase'>    
                    <div>Ya se que parezco un gato perdido y asustado, pero no es así... </div>
                    <div>Conoceme</div>
                </div>
            </p>
            
            <img src={gato} alt="Gato mas lindo del mundo" />
        </article>
    )
};
export default Home;