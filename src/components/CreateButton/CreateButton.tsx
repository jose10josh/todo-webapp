import './CreateButton.css';


type CreateTodoButtonModel = {
  openModal:boolean,
  setOpenModal:React.Dispatch<React.SetStateAction<boolean>>,
}
function CreateTodoButton({openModal, setOpenModal}:CreateTodoButtonModel) {
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