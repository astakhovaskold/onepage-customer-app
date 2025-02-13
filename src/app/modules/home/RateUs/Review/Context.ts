import {createContext} from 'react';

interface Ctx {
    rate: number;
}

const Context = createContext<Ctx>({
    rate: 0,
});

export default Context;
