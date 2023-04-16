import { useState } from "react";
import botones from './botones';
import '../style.css';

function Puzzle() {
    const [listaBotones, setListaBotones] = useState(botones);
    //Elemento Arriba  Derecha Abajo Izquierda
    const [cambioPush, setCambioPush] = useState([0, 0, 0, 0, 0]);
    const [clicks, setClicks] = useState(0);
    const [finJuego, setFinJuego] = useState(false);


    function handleClick(e) {
        setClicks(clicks + 1);
        setCambioPush([
            cambioPush[0] = e.id,
            cambioPush[1] = e.id - 4,
            cambioPush[2] = e.id + 1,
            cambioPush[3] = e.id + 4,
            cambioPush[4] = e.id - 1,
        ])

        if (e.id % 4 == 0) {
            const listaModificada = listaBotones.map((element) => {
                if (element.id == cambioPush[0] || element.id == cambioPush[1] || element.id == cambioPush[3] || element.id == cambioPush[4]) {
                    return { ...element, push: !element.push }
                }
                else {
                    return element;
                }
            })
            setListaBotones(listaModificada);

        } else if (e.id % 4 == 1) {
            const listaModificada = listaBotones.map((element) => {
                if (element.id == cambioPush[0] || element.id == cambioPush[1] || element.id == cambioPush[2] || element.id == cambioPush[3]) {
                    return { ...element, push: !element.push }
                }
                else {
                    return element;
                }
            })
            setListaBotones(listaModificada);
        } else {
            const listaModificada = listaBotones.map((element) => {
                if (element.id == cambioPush[0] || element.id == cambioPush[1] || element.id == cambioPush[2] || element.id == cambioPush[3] || element.id == cambioPush[4]) {
                    return { ...element, push: !element.push }
                }
                else {
                    return element;
                }
            })
            setListaBotones(listaModificada);

        }
    }

    function handleSubmit() {
        setFinJuego(true);
    }

    return (
        <div className='contenedor'>
            <h1>Puzzle</h1>
            <div className="botones">
                {listaBotones.map((e) => (
                    <div key={e.id}>
                        <button onClick={() => (handleClick(e))} className={e.push ? 'push' : 'unpush'}> O </button>
                    </div>
                ))}
            </div>
            <div>

                {finJuego ?
                    <div>
                        <h2>Felicidades terminaste en {clicks} clicks!!!</h2>
                        <a href="/">Reiniciar</a>
                    </div>
                    : 
                    <button onClick={handleSubmit} disabled={listaBotones.filter((e) => (e.push)).length !== 16}>Submit</button>
                }
            </div>
        </div>
    )
}


export default Puzzle;