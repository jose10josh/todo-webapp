import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { TodoContextModel } from '../../models/TodoContextModel';
import './TodoForm.css'

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = useContext(TodoContext) as TodoContextModel;


  const onChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('')
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TO-DO </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export {TodoForm};