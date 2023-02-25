import React, {useContext} from 'react';
import MedContext from '@context/MedContext';
import getMes from '@hooks/getMes';
import Dia from '@components/Dia';
const Semana = (nro) => {
    const {state}=useContext(MedContext);
    const mes=getMes(state).dias;
    const ini=7*nro.nro;
    const fin=ini+7;
    const semana=mes.slice(ini, fin);
    return (
        <tr>
            {semana.map(
                (element, index) =>( 
                    <Dia dia={element} key={index}/>
                )
            )}
        </tr>
    )
};
export default Semana;