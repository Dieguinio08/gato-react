
const getToday=()=>{
    const today = new Date();
    const year= today.getFullYear();
    let mes= today.getMonth()+1;
    let dia= today.getDay();
    mes=mes.toString();
    dia=dia.toString();
    if (mes.length<2){
        mes="0"+mes;
    }
    if (dia.length<2){
        dia="0"+dia;
    }
    const periodo=year+"-"+mes;
    const hoy=dia+"/"+mes+"/"+year;
    return {periodo, hoy};

}
export default getToday;