import { useState } from 'react';//importo de rect el hook (function) useState
import React from 'react';

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    setCounter( counter + 1);
  }
  const handleSubtract = () => {
    setCounter(counter - 1); // Resto 1 al contador
  }

  const handleReset = () => {
    setCounter(value); // Reseteo el contador a 0
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

// Valores por defecto para las props
CounterApp.defaultProps = {
  value: 0,
};
