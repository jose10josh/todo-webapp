// import React, { useContext } from 'react';
// import { CreateTodoButton } from './CreateButton/CreateButton';
// import { TodoItem } from './TodoItem/TodoItem';
// import { TodoList } from './TodoList/TodoList';
// import { TodoContext } from '../context/TodoContext';
// import { TodoContextModel } from '../models/TodoContextModel';
// import {Modal} from './Modal/Modal';
// import { TodoForm } from './TodoForm/TodoForm';
// import { Header } from './Header/Header';
// import { TodoCounter } from './TodoCounter/TodoCounter';
// import { TodoSearch } from './TodoSearch/TodoSearch';


const AppUI = () => {
  // const {
  //   loading,
  //   error,
  //   searchedTodos,
  //   onCompleteTodo,
  //   onDeleteTodo,
  //   openModal,
  //   setOpenModal,
  //   completedTodos,
  //   totalTodos,
  //   setSearchVal,
  //   searchVal,
  //   addTodo
  // } = useContext(TodoContext) as TodoContextModel;


  return (
    <>
      {/* <Header >
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch
          setSearchVal={setSearchVal}
          searchVal={searchVal}
        />
      </Header>

      <TodoList>
        {loading ? <p>Cargando</p>
        : error ? <p>Ocurrio un error</p>
        : !searchedTodos.length ? <p>Crea tu primer todo</p>
        : searchedTodos.map(todoItem => (
            <TodoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              completed={todoItem.completed}
              onComplete={() => onCompleteTodo(todoItem.id, todoItem.completed)}
              onDelete={() => onDeleteTodo(todoItem.id)}
            />
          ))
        }
      </TodoList>

      {!!openModal &&
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      }

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      /> */}
    </>
  );
};

export {AppUI};