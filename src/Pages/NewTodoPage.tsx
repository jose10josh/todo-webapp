import React from 'react';
import { TodoForm } from '../components/TodoForm/TodoForm';

const NewTodoPage = () => {
  return (
    <div>
      <TodoForm
        title={"Escribe tu nuevo TO-DO"}
        submitText={"Añadir"}
        submitTodo={()=>{console.log()}}
      />
    </div>
  );
};

export {NewTodoPage};