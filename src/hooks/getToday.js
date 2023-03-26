import data from '@components/data';

const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    let mes = today.getMonth() + 1;
    let dia = today.getDate();
    mes = mes.toString();
    dia = dia.toString();
    if (mes.length < 2) {
        mes = '0' + mes;
    }
    if (dia.length < 2) {
        dia = '0' + dia;
    }

    const periodo = year + '-' + mes;
    let hoy = dia + '/' + mes + '/' + year;
    hoy = data.filter((e) => {
        return e.fecha == hoy;
    });
    hoy = hoy[0];
    return { periodo, hoy };
};
export default getToday;
