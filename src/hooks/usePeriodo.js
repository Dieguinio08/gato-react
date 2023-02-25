import { useState } from "react";
import getPeriodo from '@hooks/getPeriodo';


const usePeriodo= ()=>{
    const [state, setState]=useState(getPeriodo());

    const setPeriodo= (periodo)=>{
        setState(periodo);
    }

    return{
        state,
        setPeriodo
    }
}
export default usePeriodo;