
import { TodoContext } from './context/TodoContext';
import { AppUI } from './components/AppUI';
import { useInitialState } from './hooks/useInitialState';



// const defaultTodos:TodoItemModel[] = [
//   {id: 1, text:"Hacer la tarea", completed: false},
//   {id: 2, text:"Lavar los platos", completed: false},
//   {id: 3, text:"Doblar la ropa", completed: false},
//   {id: 4, text:"Lavar la ropa", completed: true},
// ]


function App() {
  const initialState = useInitialState();
  return (
    <TodoContext.Provider value={initialState}>
      <AppUI/>
    </TodoContext.Provider>
  );
}

export default App;
