import { useState, useContext } from "react";
import nuevaLista from "./Tarjetas.js";
import Tarjeta from "./Tarjeta.js";
import Restultado from "./Resultado.js";
import Turnos from "./Turnos.js";
import useIsMemoria from "../../hook/useIsMemoria.js"
import { userContext } from "../../context/appcontext.js"
import '../style.css';

const Memoria = ()  =>{

    const puntajeGlobal = useContext(userContext);
    console.log(puntajeGlobal[0])
    const [isMemoria, setIsMemoria] = useIsMemoria(true);
    let [puntaje, setPuntaje] = useState([0, 0]);
    let [isJugador1, setIsJugador1] = useState(true);
    let [ocultar, setOcultar] = useState(0);
    let [listaRonda, setListaRonda] = useState([]);
    const [tarjetas, setTarjetas] = useState(nuevaLista);


    function handleClick(element) {
        setOcultar(ocultar + 1);

        const nuevaListaRonda = listaRonda.concat(element)
        setListaRonda(nuevaListaRonda);

        if (ocultar < 2) {
            const tarjetasActualizadas = tarjetas.map((e) =>
                e.id === element.id ? { ...e, visible: !e.visible } : e
            );
            setTarjetas(tarjetasActualizadas);
        } else {

            const ocultarTarjetas = tarjetas.map((e) =>
                (e.visible === true && listaRonda[0].color === listaRonda[1].color)
                    ? { ...e, visible: !e.visible, disabled: !e.disabled }
                    : (e.visible === true)
                        ? { ...e, visible: !e.visible }
                        : e
            );
            setTarjetas(ocultarTarjetas);
            setOcultar(0);
            setListaRonda([]);

            if (listaRonda[0].color === listaRonda[1].color) {
                actualizarPuntaje()
            } else {
                setIsJugador1(!isJugador1);
            }
        }
    }
    function handleSubmit(lista) {

        console.log(puntaje[0] + puntaje[1])
        handleClick(lista[0])
        handleClick(lista[1])


    }

    function actualizarPuntaje() {

        if (isJugador1) {
            setPuntaje([puntaje[0] + 1, puntaje[1]])
        } else {
            setPuntaje([puntaje[0], puntaje[1] + 1])
        }


    }

    return (
        <div className="contenedor">
            {puntajeGlobal}
            <h1>Juego Memoria</h1>
            <Turnos
                isJugador1={isJugador1}
                puntajeJugador1={puntaje[0]}
                puntajeJugador2={puntaje[1]}
            />

            <div className="tarjetas">
                {tarjetas.map((e) => (
                    <div key={e.id}>
                        <Tarjeta
                            key={e.id}
                            tarjeta={e}
                            handleClick={handleClick}
                        />
                    </div>
                ))}
            </div>
            <div>
                <Restultado
                    puntajeJugador1={puntaje[0]}
                    puntajeJugador2={puntaje[1]}
                    tarjetas={tarjetas}
                    handleSubmit={handleSubmit}
                    ocultar={ocultar}
                    listaRonda={listaRonda}
                    setIsMemoria={setIsMemoria}
                />
            </div>
        </div>
    );
}

export default Memoria;