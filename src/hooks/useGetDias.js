import {useEffect, useState} from 'react';
import axios from 'axios';


const useGetDias=()=>{
    const API='@public/base.json';
    const [dias, setDias]=useState([])
    useEffect(() => {
        const getDias = async () => {
            const response = await axios(API);
            console.log(response);
            setDias(response.data);
        };
    }, []);
    return dias;
}
export default useGetDias;