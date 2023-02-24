import { useState } from "react";
import {CreateTodoButton} from "./components/CreateButton/CreateButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoItemModel } from "./models/TodoItemModel";




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

  const onCompleteTodo = (id: number, completed:boolean) => {
    const todoIndex = todoList.findIndex(todo => todo.id === id);
    const updateList = [...todoList];
    updateList[todoIndex].completed = !completed;
    setTodoList(updateList);
  }

  const onDeleteTodo = (id:number) => {
    const todoIndex = todoList.findIndex(todo => todo.id === id);
    const updateList = [...todoList];
    updateList.splice(todoIndex, 1);
    setTodoList(updateList);
  }

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
            // setTodoList={setTodoList}
            // todoList={todoList}
            onComplete={() => onCompleteTodo(todoItem.id, todoItem.completed)}
            onDelete={() => onDeleteTodo(todoItem.id)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
