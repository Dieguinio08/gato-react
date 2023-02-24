import React from 'react';
import '@styles/medicamentos.css';

import getMes from '@hooks/getMes';
import Periodo from '@components/Periodo';

const Medicamentos = () => {
    return (
        <div className='medicamentos'>
            <div className='container'>
            <Periodo/>
            <table>
                <thead>
                    <tr>
                    <th>Domingo</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sábado</th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
            </div>
        </div>
    )
};
export default Medicamentos;