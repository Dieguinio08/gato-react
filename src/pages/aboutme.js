import React from 'react';
import styles from '@styles/Aboutme.module.css';
import gato from '@images/gato2.png';
import Image from 'next/image';
const Aboutme = () => {
    return (
        <div className={styles.aboutme}>
            <h1>Me llamo Gato</h1>
            <p>
                Si, me llamo Gato, muy original mi humano. Soy un gato de unos 10 años, creo, era muy chico cuando nací. Soy un gato muy gritón y me gusta que me den de comer, aunque tengo Royal Canin
                en casa y me dan en cantidades ilimitadas, pero a veces me aburré comer esa marca (aunque me cambien de sabor todos los meses) y salgo a pedir a los vecinos.
            </p>
            <p>
                Hace poco me diagnosticaron que tengo un problema en el corazón y estoy medicado con 3 pastillas en la merienda de por vida, si, las 7 que me quedan. Ademas tengo una enfermedad
                autoinmune en la boca, y estoy con gotitas en el desayuno.
            </p>
            <p>
                Soy un gatito hincha, pero muy querido. En mi casa, me quieren y me dan todos los gustos, pero a veces me gusta recibir mimos de los vecinos y gente en la calle, especialmente cuando
                mis humanos salen a hacer mandados.
            </p>
            <p>Me gustán los mimos, muchísimo, no tanto los otros animales, para nada, especialmente los perros. A quien le pueden gustar los perros? </p>
            <p>Los quiero humanos, cuando los conquistemos, les voy a dar Royal Canin todos los días. &#128523;</p>
            <Image src={gato} alt="" />
            <br />
            <br />
            <br />
        </div>
    );
};
export default Aboutme;
