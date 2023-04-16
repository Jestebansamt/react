
function Restultado(props) {

  
    return props.puntajeJugador1 + props.puntajeJugador2 === props.tarjetas.length / 2 ? (
        props.puntajeJugador1 < props.puntajeJugador2 ? (
            <div>
                <h2>Gano el jugador 2</h2>
            </div>
        ) : props.puntajeJugador2 < props.puntajeJugador1 ? (
            <div >
                <h2>Gano el jugador 1</h2>
            </div>
        ) : (
            <h2>Es un empate</h2>
        )
    ) : (
        <button onClick={() => props.handleSubmit(props.listaRonda)} disabled={props.ocultar !== 2}>
            Enviar
        </button>
    );
}

export default Restultado;
