import React, { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../context/TodoContext';
import { TodoContextModel } from '../../models/TodoContextModel';



function TodoCounter() {
  const {completedTodos, totalTodos} = useContext(TodoContext) as TodoContextModel;
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };