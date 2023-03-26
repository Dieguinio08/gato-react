import { useState } from 'react';

const useOculto = () => {
    const [state, setState] = useState(false);
    const setOculto = (oculto) => {
        setState(oculto);
    };

    return {
        state,
        setOculto,
    };
};
export default useOculto;
