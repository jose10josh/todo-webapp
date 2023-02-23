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

const todos:TodoItemModel[] = [
  {id: 1, text:"todo 1", completed: false},
  {id: 2, text:"todo 2", completed: false},
  {id: 3, text:"todo 3", completed: false},
  {id: 4, text:"todo 5", completed: true},
]


function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
