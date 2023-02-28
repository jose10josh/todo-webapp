import React from 'react';
import { TodoItemModel } from '../../models/TodoItemModel';
import './TodoList.css'


type TodoListProps = {
  error:boolean
  loading:boolean
  searchedTodos:TodoItemModel[]
  onError:() => JSX.Element
  onLoading:() => JSX.Element
  onEmptyTodos:() => JSX.Element
  render:(todoItem: TodoItemModel) => JSX.Element
}
function TodoList(props:TodoListProps) {
  return (
    <section className='todolist-container'>
      <>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
        {props.searchedTodos.map(props.render)}
      </>
    </section>
  );
}

export { TodoList };