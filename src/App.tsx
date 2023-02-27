
import { useInitialState } from './hooks/useInitialState';
import { CreateTodoButton } from './components/CreateButton/CreateButton';
import { Modal } from './components/Modal/Modal';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoForm } from './components/TodoForm/TodoForm';
import { Header } from './components/Header/Header';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';


function App() {
  const {
    loading,
    error,
    searchedTodos,
    onCompleteTodo,
    onDeleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    setSearchVal,
    searchVal,
    addTodo
  } = useInitialState();

  return (
    <>
      <Header >
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch
          setSearchVal={setSearchVal}
          searchVal={searchVal}
        />
      </Header>

      <TodoList>
        {loading ? <p>Cargando</p>
        : error ? <p>Ocurrio un error</p>
        : !searchedTodos.length ? <p>Crea tu primer todo</p>
        : searchedTodos.map(todoItem => (
            <TodoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              completed={todoItem.completed}
              onComplete={() => onCompleteTodo(todoItem.id, todoItem.completed)}
              onDelete={() => onDeleteTodo(todoItem.id)}
            />
          ))
        }
      </TodoList>

      {!!openModal &&
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      }

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default App;
