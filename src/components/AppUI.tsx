import React, { useContext } from 'react';
import { CreateTodoButton } from './CreateButton/CreateButton';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoContext } from '../context/TodoContext';
import { TodoContextModel } from '../models/TodoContextModel';


const AppUI = () => {
  const {loading, error, searchedTodos, onCompleteTodo, onDeleteTodo} = useContext(TodoContext) as TodoContextModel;
  return (
    <>
      <TodoCounter />
      <TodoSearch />

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

      <CreateTodoButton />
    </>
  );
};

export {AppUI};