import { useState } from "react";

function useIsMemoria(initialState) {
    const [state, setState] = useState(true);

    const updateState = (nuevoState) => {
        setState(nuevoState)
    }

    return [state, updateState]
}

export default useIsMemoria;