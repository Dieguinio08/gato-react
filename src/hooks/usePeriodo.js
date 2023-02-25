import { useState } from "react";
import getToday from '@hooks/getToday';


const usePeriodo= ()=>{
    const [state, setState]=useState(getToday());

    const setPeriodo= (periodo)=>{
        setState(periodo);
    }

    return{
        state,
        setPeriodo
    }
}
export default usePeriodo;