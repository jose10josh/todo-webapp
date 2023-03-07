import React from 'react';
import { TodoItemModel } from '../../models/TodoItemModel';
import './TodoList.css'


type TodoListProps = {
  error:boolean
  loading:boolean
  searchedTodos:TodoItemModel[]
  totalTodos:number
  children:React.ReactNode
  onError:() => JSX.Element
  onLoading:() => JSX.Element
  onEmptyTodos:() => JSX.Element
  onEmptySearch:() => JSX.Element
  // render?:(todoItem: TodoItemModel) => JSX.Element
}
function TodoList(props:TodoListProps) {
  return (
    <section className='todolist-container'>
      <>
        {
        props.loading ? props.onLoading()
        : props.error ? props.onError()
        : !props.totalTodos ? props.onEmptyTodos()
        : (!props.searchedTodos.length && !!props.totalTodos) ? props.onEmptySearch()
        // : props.render ? props.searchedTodos.map(props.render)
        : props.children
        }

        {/* {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {(!props.loading && !props.searchedTodos.length && !!props.totalTodos) && props.onEmptySearch()}
        {props.render ? props.searchedTodos.map(props.render) : props.children} */}
      </>
    </section>
  );
}

export { TodoList };