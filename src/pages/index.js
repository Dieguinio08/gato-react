import React from 'react';
import Style from '@styles/Home.module.css';
import gato from '@images/foto_gato.png';
import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
    return (
        <article className={Style.home}>
            <div className={Style.container}>
                <div className={Style.frase}>
                    <div>Ya se que parezco un gato perdido y asustado, pero no es así... </div>
                    <Link href={'/aboutme'}>Conoceme</Link>
                </div>
            </div>

            <Image src={gato} alt="Gato mas lindo del mundo" />
        </article>
    );
}
