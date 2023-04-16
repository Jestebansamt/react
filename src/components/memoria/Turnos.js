
function Turnos(props) {
    return (
        props.isJugador1 ?
            <p><strong>Jugador1 : {props.puntajeJugador1}</strong> Jugador2 : {props.puntajeJugador2}</p>
            :
            <p>Jugador1 : {props.puntajeJugador1} <strong>Jugador2 : {props.puntajeJugador2}</strong></p>

    )
}

export default Turnos