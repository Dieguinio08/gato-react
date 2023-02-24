import {useState} from 'react';

const getToday=()=>{
    const today = new Date();
    const year= today.getFullYear();
    let mes= today.getMonth()+1;
    mes=mes.toString();
    if (mes.length<2){
        mes="0"+mes;
    }
    const hoy=year+"-"+mes;
    return hoy;

}
export default getToday;