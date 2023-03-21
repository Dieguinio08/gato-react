import React, {useContext} from 'react';
import MedContext from '@context/MedContext';
import getMes from '@hooks/getMes';
import Dia from '@components/Dia';
const Semana = (nro) => {
    const {state}=useContext(MedContext);
    const mes=getMes(state).dias;
    return (
        <div>
            {semana.map(
                (element, index) =>( 
                    <Dia dia={element} key={index}/>
                )
            )}
        </div>
    )
};
export default Semana;