import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CreateTodoButton } from '../components/CreateButton/CreateButton';
import { EmptyList } from '../components/EmptyList/EmptyList';
import { ShowError } from '../components/Error/Error';
import { Header } from '../components/Header/Header';
import { Loading } from '../components/Loading/Loading';
// import { Modal } from '../components/Modal/Modal';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
// import { TodoForm } from '../components/TodoForm/TodoForm';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { ChangeAlertWithStorageListener } from '../components/WithStorageAlert/storageChange';
import { useInitialState } from '../hooks/useInitialState';

const HomePage = () => {
  const navigate = useNavigate()
  const {
    states,
    statesUpdaters
  } = useInitialState();

  const {
    loading,
    error,
    searchedTodos,
    // openModal,
    completedTodos,
    totalTodos,
    searchVal
  } = states;

  const {
    onCompleteTodo,
    onDeleteTodo,
    // setOpenModal,
    setSearchVal,
    // addTodo,
    sincronizeTodos
  } = statesUpdaters;

  return (
    <>
      <Header loading={loading}>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          />
        <TodoSearch
          setSearchVal={setSearchVal}
          searchVal={searchVal}
        />
      </Header>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <ShowError />}
        onLoading={() => <Loading />}
        onEmptyTodos={() => <EmptyList> <p>¡Crea tu primer TODO!</p></EmptyList>}
        onEmptySearch={() => <EmptyList > <p>No hay resultados para: {searchVal}</p></EmptyList>}
        // render={(todoItem:TodoItemModel) => (
        //   <TodoItem
        //     key={todoItem.id}
        //     id={todoItem.id}
        //     text={todoItem.text}
        //     completed={todoItem.completed}
        //     onComplete={() => onCompleteTodo(todoItem.id, todoItem.completed)}
        //     onDelete={() => onDeleteTodo(todoItem.id)}
        //   />
        // )}
      >
        {searchedTodos.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            text={todoItem.text}
            completed={todoItem.completed}
            onComplete={() => onCompleteTodo(todoItem.id, todoItem.completed)}
            onDelete={() => onDeleteTodo(todoItem.id)}
            onEdit={() => {navigate(`/edit/${todoItem.id}`)}}
          />
        ))}
      </TodoList>

      {/* {!!openModal &&
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      } */}

      <CreateTodoButton
        redirect={() => navigate("/new")}
        // openModal={openModal}
        // setOpenModal={setOpenModal}
      />


      <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />
    </>
  );
};

export {HomePage};