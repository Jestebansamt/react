//Tarjeta.js

const tarjetas = [
    { id: 1, color: "blue", content: "?", disabled: false, visible: false },
    { id: 2, color: "blue", content: "?", disabled: false, visible: false },
    // { id: 3, color: "yellow", content: "?", disabled: false, visible: false },
    // { id: 4, color: "yellow", content: "?", disabled: false, visible: false },
    // { id: 5, color: "red", content: "?", disabled: false, visible: false },
    // { id: 6, color: "red", content: "?", disabled: false, visible: false },
    // { id: 7, color: "green", content: "?", disabled: false, visible: false },
    // { id: 8, color: "green", content: "?", disabled: false, visible: false },
    // { id: 9, color: "white", content: "?", disabled: false, visible: false },
    // { id: 10, color: "white", content: "?", disabled: false, visible: false },
    // { id: 11, color: "Teal", content: "?", disabled: false, visible: false },
    // { id: 12, color: "Teal", content: "?", disabled: false, visible: false },
    // { id: 13, color: "Purple", content: "?", disabled: false, visible: false },
    // { id: 14, color: "Purple", content: "?", disabled: false, visible: false },
    // { id: 15, color: "silver", content: "?", disabled: false, visible: false },
    // { id: 16, color: "silver", content: "?", disabled: false, visible: false },
    // { id: 17, color: "aqua", content: "?", disabled: false, visible: false },
    // { id: 18, color: "aqua", content: "?", disabled: false, visible: false },
    // { id: 19, color: "Lime", content: "?", disabled: false, visible: false },
    // { id: 20, color: "Lime", content: "?", disabled: false, visible: false },
];


const nuevaLista = [...tarjetas]
nuevaLista.sort(() => Math.random() - 0.5);

export default nuevaLista;