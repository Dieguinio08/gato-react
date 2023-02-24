import React, {useState} from 'react';
import periodos from '@components/periodos';
import getToday from '@hooks/getToday';

const Periodo = () => {
    const p= periodos;
    const [hoy, setHoy]=useState(getToday());
    return (  
        <select className='periodo' defaultValue={hoy}>
            {
                p.map(
                    (element, index) =>(    
                        <option key={index} value={element}>{element}</option> 
                    )
                )
            }                     
        </select>
    )
};
export default Periodo;