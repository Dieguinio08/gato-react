import React, {useState} from 'react';
import '@styles/medicamentos.css';
import MedContext from '@context/MedContext';
import Periodo from '@components/Periodo';
import usePeriodo from '@hooks/usePeriodo';
import Semana from '@components/Semana';

const Medicamentos = () => {
    const periodo=usePeriodo();
    const m=parseInt(periodo.state.slice(-2))-1;
    const meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
    const nombre=meses[m];
    return (
        <MedContext.Provider value={periodo}>
        <div className='medicamentos'>
            <div className='container'>
            <Periodo/>
            <h1>{nombre}</h1>
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
                    <Semana nro="0"/>
                    <Semana nro="1"/>
                    <Semana nro="2"/>
                    <Semana nro="3"/>
                    <Semana nro="4"/>
                    <Semana nro="5"/>
                </tbody>
            </table>
            </div>
        </div>
        </MedContext.Provider>
    )
};
export default Medicamentos;