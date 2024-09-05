import { useState } from "react";
import React from 'react';
import StartScreen from "./components/StartScreen";
import Play from "./components/Play";

function App() {

  const [isGameStart, setIsGameStart] = useState(false);

  const checkVal = () => {
    setIsGameStart((val) => !val);
  }
  return (
    <React.StrictMode>
      {isGameStart ? <Play /> : <StartScreen startGame={checkVal} />}
    </React.StrictMode>
  )
}

export default App;
