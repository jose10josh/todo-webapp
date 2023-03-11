import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm/TodoForm';
import { useInitialState } from '../hooks/useInitialState';
import { LocationState } from '../models/LocationModel';
import { TodoItemModel } from '../models/TodoItemModel';

const EditTodoPage = () => {
  const location = useLocation()
  const { statesUpdaters, states } = useInitialState();
  const params = useParams();

  const {loading, getTodoById} = states;
  const {editTodo} = statesUpdaters;
  const id = Number(params.id);

  let prevText = null;
  let myTodo:undefined|TodoItemModel;

  if(location.state?.text) {
    prevText = location.state.text
  } else if(loading){
    return (
      <p>Cargando...</p>
    )
  } else {
    myTodo = getTodoById(id);
    if(!myTodo) {
      return (
        <p>TO-DO Not found</p>
      )
    }
    prevText = myTodo.text;
  }

  return (
    <div>
      <TodoForm
        title={"Edita tu TO-DO"}
        submitText={"Editar"}
        submitTodo={(text:string) => editTodo(text, id)}
        prevTodo={prevText}
      />
    </div>
  );
};

export {EditTodoPage};