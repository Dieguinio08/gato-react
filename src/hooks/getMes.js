import data from '@components/data';

const getMes=(periodo)=>{
    const filtrado=data.filter((i)=>{return i.periodo==periodo});
    
    //Agregando los días del mes anterior
    const min = filtrado[0];
    let iniciales=[];
    if (min.diasemana>1){
        const ini=min.id-min.diasemana+1;
        for(let i=ini-1;i<min.id-1;i++){
            iniciales.push(data[i]);
        }
    }
    
    ////Agregando los días del mes siguiente
    const max = filtrado[filtrado.length-1];
    let finales=[];
    if (max.diasemana<7){
        const fin=max.id+(7-max.diasemana);
        for(let i=max.id;i<fin;i++){
            finales.push(data[i]);
        }
    }
    const dias=iniciales.concat(filtrado).concat(finales);
    
    return {dias};

}

export default getMes;