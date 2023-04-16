import React, { createContext, useState } from 'react';
import Memoria from "../components/memoria/Memoria.js"

export const userContext = createContext();

export function PuntajeGlobalProvider() {
    const [puntajeGlobal, setPuntajeGlobal] = useState({jugador1:0, jugador2:0}) ;
    return (
        <userContext.Provider value={ puntajeGlobal }>
       
            <div>
                <Memoria />
            </div>
        </userContext.Provider>
    );
};