import { useState } from "react";
import {CreateTodoButton} from "./components/CreateButton/CreateButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";


interface TodoItemModel {
  id: number;
  text: string;
  completed: boolean;
}

const defaultTodos:TodoItemModel[] = [
  {id: 1, text:"Hacer la tarea", completed: false},
  {id: 2, text:"Lavar los platos", completed: false},
  {id: 3, text:"Doblar la ropa", completed: false},
  {id: 4, text:"Lavar la ropa", completed: true},
]


function App() {
  const [todoList, setTodoList] = useState<TodoItemModel[]>(defaultTodos);
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

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchVal={searchVal} setSearchVal={setSearchVal} />

      <TodoList>
        {serchedTodos.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            text={todoItem.text}
            completed={todoItem.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
