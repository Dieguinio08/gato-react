import React from 'react';
import gota from '@images/gota.svg';
import Pastilla from '@components/Pastilla';
import getToday from '@hooks/getToday'
const Dia = ({dia}) => {
    const fecha=getToday().hoy.fecha;
    const d=(dia.fecha==fecha);
    return (
        <div  className={d ?"dia hoy":"dia"} >
            <p>{dia.nro}</p>
            <ul>
                {dia.remedios[0] ? <li>Prednisol 15ml <img src={gota} /><img src={gota} /><img src={gota} /></li>:""}
                {dia.remedios[1] ?<li>Lasix 40mg <div className="lasix"><Pastilla/></div></li>:""}
                <li>.</li>
                {dia.remedios[2] ?<li>Aspirineta <div className='aspirineta'><Pastilla/></div></li>:""}
                {dia.remedios[3] ?<li>Cardial B 2,5 mg <div className='cardial'><Pastilla/></div></li>:""}
            </ul> 
        </div>
    )
};
export default Dia;