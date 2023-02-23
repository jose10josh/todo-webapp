import React from 'react';
import './TodoCounter.css';


type TodoCounterprops = {
  completed:number,
  total:number
}

function TodoCounter({completed, total}:TodoCounterprops) {
  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };