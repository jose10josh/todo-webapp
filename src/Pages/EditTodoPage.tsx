import React from 'react';
import { TodoForm } from '../components/TodoForm/TodoForm';

const EditTodoPage = () => {
  return (
    <div>
      <TodoForm
        title={"Edita tu TO-DO"}
        submitText={"Editar"}
        submitTodo={()=>{console.log()}}
      />
    </div>
  );
};

export {EditTodoPage};