import React, {useContext} from 'react';
import periodos from '@components/periodos';
import MedContext from '@context/MedContext';
import getPeriodo from '@hooks/getPeriodo';

const Periodo = () => {
    const p= periodos;
    const {setPeriodo}=useContext(MedContext);
    const handleChange= (event)=>{
        setPeriodo(event.target.value);
    }
    return (  
        <select  onChange={handleChange} className='periodo' defaultValue={getPeriodo()}>
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