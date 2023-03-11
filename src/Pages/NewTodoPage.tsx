import React from 'react';
import { TodoForm } from '../components/TodoForm/TodoForm';
import { useInitialState } from '../hooks/useInitialState';

const NewTodoPage = () => {
  const { statesUpdaters } = useInitialState();

  return (
    <div>
      <TodoForm
        title={"Escribe tu nuevo TO-DO"}
        submitText={"Añadir"}
        submitTodo={(newTodo:string)=>{statesUpdaters.addTodo(newTodo)}}
      />
    </div>
  );
};

export {NewTodoPage};