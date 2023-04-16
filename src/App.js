import { useState } from "react";
import Memoria from "./components/memoria/Memoria";
import Puzzle from "./components/puzzle/Puzzle";
function App() {
  const [isMemoria, setIsMemoria] = useState(true);

  const handleUpdateState = () => {
    setIsMemoria(!isMemoria)
  }
  return (
    <div>
      {isMemoria ? <Memoria
        onUpdateState={handleUpdateState}
      /> :

        <Puzzle />
      }

    </div>

  );
}

export default App;
