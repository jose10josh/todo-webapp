import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { TodoContextModel } from '../../models/TodoContextModel';
import './CreateButton.css';



function CreateTodoButton() {
  const {openModal, setOpenModal} = useContext(TodoContext) as TodoContextModel;
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <button className={`CreateTodoButton ${openModal && "closeTodoButton"}`}
      onClick={handleOpenModal}
    >+</button>
  );
}

export { CreateTodoButton };