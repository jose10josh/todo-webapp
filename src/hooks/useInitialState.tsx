import {useState} from 'react';
import { TodoContextModel } from '../models/TodoContextModel';
import { TodoItemModel } from '../models/TodoItemModel';
import { useLocalStorage } from './useLocalStorage';


const useInitialState = ():TodoContextModel => {
  const {itemList: todoList, saveItem: saveTodos, loading, error} = useLocalStorage<TodoItemModel[]>('TODOS_V1', []);
  const [searchVal, setSearchVal] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todoList.filter(item => item.completed).length
  const totalTodos = todoList.length;

  let searchedTodos:TodoItemModel[] = [];
  if(searchVal.length <= 0) {
    searchedTodos = todoList;
  } else {
    const searchedText:string = searchVal.toLowerCase();
    searchedTodos = todoList.filter(item => item.text.toLowerCase().includes(searchedText))
  }

  const onCompleteTodo = (id: number, completed:boolean) => {
    const todoIndex = todoList.findIndex(todo => todo.id === id);
    const updateList = [...todoList];
    updateList[todoIndex].completed = !completed;
    saveTodos(updateList);
  }

  const onDeleteTodo = (id:number) => {
    const todoIndex = todoList.findIndex(todo => todo.id === id);
    const updateList = [...todoList];
    updateList.splice(todoIndex, 1);
    saveTodos(updateList);
  }

  const addTodo = (todo:string) => {
    const lastTodo = todoList[todoList.length - 1];
    const newTodo:TodoItemModel = {
      id: lastTodo.id+1,
      text: todo,
      completed: false
    }
    const updateList = [...todoList, newTodo];
    saveTodos(updateList);
  }

  return {
    completedTodos,
    totalTodos,
    searchedTodos,
    loading,
    error,

    searchVal,
    setSearchVal,

    onCompleteTodo,
    onDeleteTodo,
    addTodo,

    openModal,
    setOpenModal
  }
}


export {useInitialState};