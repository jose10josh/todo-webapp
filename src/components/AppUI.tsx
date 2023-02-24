import React from 'react';
import { TodoItemModel } from '../models/TodoItemModel';
import { CreateTodoButton } from './CreateButton/CreateButton';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';



type AppUIProps = {
  completedTodos:number,
  totalTodos:number,
  searchVal: string,
  serchedTodos:TodoItemModel[],
  setSearchVal: React.Dispatch<React.SetStateAction<string>>,
  onCompleteTodo:(id: number, completed: boolean) => void,
  onDeleteTodo:(id: number) => void
}

const AppUI = ({
  completedTodos,
  totalTodos,
  searchVal,
  setSearchVal,
  serchedTodos,
  onCompleteTodo,
  onDeleteTodo
}:AppUIProps) => {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchVal={searchVal} setSearchVal={setSearchVal} />

      <TodoList>
        {serchedTodos.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            text={todoItem.text}
            completed={todoItem.completed}
            onComplete={() => onCompleteTodo(todoItem.id, todoItem.completed)}
            onDelete={() => onDeleteTodo(todoItem.id)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
};

export {AppUI};