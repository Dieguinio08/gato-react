import React from 'react';
import '@styles/home.css';
import gato from '@images/foto_gato.png';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <article className='home'>
            <div className='container'>
                <div className='frase'>    
                    <div>Ya se que parezco un gato perdido y asustado, pero no es así... </div>
                    <Link to="/aboutme">Conoceme</Link>
                </div>
            </div>
            
            <img src={gato} alt="Gato mas lindo del mundo" />
        </article>
    )
};
export default Home;