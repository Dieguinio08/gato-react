import React from 'react';
import '@styles/medicamentos.css';
import MedContext from '@context/MedContext';
import Periodo from '@components/Periodo';
import usePeriodo from '@hooks/usePeriodo';
import Semana from '@components/Semana';
import DiaSolo from '@components/DiaSolo';
import getToday from '@hooks/getToday';


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
                <div id="mes">
                    <div id="cabecera">
                        <div>Domingo</div>
                        <div>Lunes</div>
                        <div>Martes</div>
                        <div>Miércoles</div>
                        <div>Jueves</div>
                        <div>Viernes</div>
                        <div>Sábado</div>
                    </div>
                    <div>
                        <Semana nro="0"/>
                        <Semana nro="1"/>
                        <Semana nro="2"/>
                        <Semana nro="3"/>
                        <Semana nro="4"/>
                        <Semana nro="5"/>
                    </div>
                </div>
            </div>
        </div>
        
        </MedContext.Provider>
    )
};
export default Medicamentos;