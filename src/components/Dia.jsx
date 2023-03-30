import React from 'react';
import gota from '@images/gota.svg';
import Pastilla from '@components/Pastilla';
import getToday from '@hooks/getToday';
import styles from '@styles/Medicamentos.module.css';
import Image from 'next/image';

const Dia = ({ dia }) => {
    const fecha = getToday().hoy.fecha;
    const d = dia.fecha == fecha;
    return (
        <div className={d ? styles['dia'] + ' ' + styles['hoy'] : styles['dia']}>
            <p>{dia.nro}</p>
            <ul>
                {dia.remedios[0] ? (
                    <li>
                        Prednisol 15ml{' '}
                        <div>
                            <Image src={gota} alt="gota"/>
                            
                        </div>
                    </li>
                ) : (
                    ''
                )}
                {dia.remedios[1] ? (
                    <li>
                        Lasix 40mg{' '}
                        <div className={styles.lasix}>
                            <Pastilla />
                        </div>
                    </li>
                ) : (
                    ''
                )}
                {dia.remedios[2] ? (
                    <li>
                        Aspirineta{' '}
                        <div className={styles.aspirineta}>
                            <Pastilla />
                        </div>
                    </li>
                ) : (
                    ''
                )}
                {dia.remedios[3] ? (
                    <li>
                        Cardial B 2,5 mg{' '}
                        <div className={styles.cardial}>
                            <Pastilla />
                        </div>
                    </li>
                ) : (
                    ''
                )}
            </ul>
        </div>
    );
};
export default Dia;
