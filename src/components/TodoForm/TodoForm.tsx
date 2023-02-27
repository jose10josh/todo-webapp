import React from 'react';
import './TodoForm.css'


type TodoFormModel = {
  addTodo:(newTodo: string) => void,
  setOpenModal:React.Dispatch<React.SetStateAction<boolean>>,
}
const TodoForm = ({addTodo,setOpenModal}:TodoFormModel) => {
  const [newTodoValue, setNewTodoValue] = React.useState('');

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