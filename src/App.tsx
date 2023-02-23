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
  {id: 1, text:"todo 1", completed: false},
  {id: 2, text:"todo 2", completed: false},
  {id: 3, text:"todo 3", completed: false},
  {id: 4, text:"todo 5", completed: true},
]


function App() {
  const [todoList, setTodoList] = useState<TodoItemModel[]>(defaultTodos);
  const [searchVal, setSearchVal] = useState("");


  const completedTodos = todoList.filter(item => item.completed).length
  const totalTodos = todoList.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchVal={searchVal} setSearchVal={setSearchVal} />

      <TodoList>
        {todoList.map(todoItem => (
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
