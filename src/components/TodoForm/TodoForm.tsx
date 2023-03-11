import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css'


type TodoFormModel = {
  title:string,
  submitText:string,
  submitTodo:(newTodo: string) => void,
  prevTodo?:string
  // setOpenModal:React.Dispatch<React.SetStateAction<boolean>>,
}

const TodoForm = (props:TodoFormModel) => {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState(props.prevTodo || "");

  const onChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.submitTodo(newTodoValue);
    // setOpenModal(false);
    setNewTodoValue('')
    navigate('/');
  };
  const onCancel = () => {
    navigate('/');
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>{props.title}</h2>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {props.submitText}
        </button>
      </div>
    </form>
  );
};

export {TodoForm};