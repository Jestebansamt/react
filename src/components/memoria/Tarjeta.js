

function Tarjeta(props) {
    return (
        <button className="tarjeta"
            onClick={() => {
                if (!props.tarjeta.visible) {
                    props.handleClick(props.tarjeta)
                }
            }}
            disabled={props.tarjeta.disabled}
            style={{ backgroundColor: props.tarjeta.visible ? props.tarjeta.color : 'black' }}>
            {props.tarjeta.visible ? "" : props.tarjeta.content}
        </button>
    )
}

export default Tarjeta