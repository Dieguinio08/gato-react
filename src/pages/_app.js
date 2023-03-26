import Header from '@components/Header';
import MenuContext from '@context/MenuContext';
import useOculto from '@hooks/useOculto';
import Footer from '@components/Footer';
import Style from '@styles/Main.module.css';
import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    const oculto = useOculto();

    return (
        <>
            <Head>
                <title>Un Gato Gritón</title>
            </Head>
            <div className={Style['main']}>
                <div className={Style.cabecera}>
                    <MenuContext.Provider value={oculto}>
                        <Header />
                    </MenuContext.Provider>
                </div>
                <div className={Style.cuerpo}>
                    <Component {...pageProps} />
                </div>
                <div className={Style.pie}>
                    <Footer />
                </div>
            </div>
        </>
    );
}
