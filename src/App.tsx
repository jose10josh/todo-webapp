import { useState } from "react";

import { TodoItemModel } from "./models/TodoItemModel";
import { AppUI } from './components/AppUI';
import { useLocalStorage } from "./hooks/useLocalStorage";


// const defaultTodos:TodoItemModel[] = [
//   {id: 1, text:"Hacer la tarea", completed: false},
//   {id: 2, text:"Lavar los platos", completed: false},
//   {id: 3, text:"Doblar la ropa", completed: false},
//   {id: 4, text:"Lavar la ropa", completed: true},
// ]





function App() {
  const Storage_Name = "TODOS_V1";
  const [todoList, setTodoList, saveTodos] = useLocalStorage<TodoItemModel[]>(Storage_Name, []);


  const [searchVal, setSearchVal] = useState("");

  const completedTodos = todoList.filter(item => item.completed).length
  const totalTodos = todoList.length;

  let serchedTodos:TodoItemModel[] = [];
  if(searchVal.length <= 0) {
    serchedTodos = todoList;
  } else {
    const searchedText:string = searchVal.toLowerCase();
    serchedTodos = todoList.filter(item => item.text.toLowerCase().includes(searchedText))
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


  return (
    <>
      <AppUI
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchVal={searchVal}
        serchedTodos={serchedTodos}
        setSearchVal={setSearchVal}
        onCompleteTodo={onCompleteTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </>
  );
}

export default App;
