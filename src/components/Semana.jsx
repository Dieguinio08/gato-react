import React, { useContext } from 'react';
import MedContext from '@context/MedContext';
import getMes from '@hooks/getMes';
import Dia from '@components/Dia';
import styles from '@styles/Medicamentos.module.css';
const Semana = (nro) => {
    const { state } = useContext(MedContext);
    const mes = getMes(state).dias;
    const ini = 7 * nro.nro;
    const fin = ini + 7;
    const semana = mes.slice(ini, fin);
    return (
        <div className={styles.semana}>
            {semana.map((element, index) => (
                <Dia dia={element} key={index} />
            ))}
        </div>
    );
};
export default Semana;
