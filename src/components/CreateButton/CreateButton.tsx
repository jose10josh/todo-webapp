import './CreateButton.css';



function CreateTodoButton() {

  const openModal = () => {

  }

  return (
    <button className="CreateTodoButton"
      onClick={openModal}
    >+</button>
  );
}

export { CreateTodoButton };