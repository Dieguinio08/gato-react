import React, { useContext } from 'react';
import periodos from '@components/periodos';
import MedContext from '@context/MedContext';
import getToday from '@hooks/getToday';
import styles from '@styles/Medicamentos.module.css';

const Periodo = () => {
    const p = periodos;
    const { setPeriodo } = useContext(MedContext);
    const handleChange = (event) => {
        setPeriodo(event.target.value);
    };
    return (
        <select onChange={handleChange} className={styles.periodo} defaultValue={getToday().periodo}>
            {p.map((element, index) => (
                <option key={index} value={element}>
                    {element}
                </option>
            ))}
        </select>
    );
};
export default Periodo;
