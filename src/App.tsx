
import { useInitialState } from './hooks/useInitialState';
import { CreateTodoButton } from './components/CreateButton/CreateButton';
import { Modal } from './components/Modal/Modal';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoForm } from './components/TodoForm/TodoForm';
import { Header } from './components/Header/Header';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { ShowError } from './components/Error/Error';
import { Loading } from './components/Loading/Loading';
import { EmptyList } from './components/EmptyList/EmptyList';
import { TodoItemModel } from './models/TodoItemModel';
import { ChangeAlertWithStorageListener } from './components/WithStorageAlert/storageChange';


function App() {
  const {
    states,
    statesUpdaters
  } = useInitialState();

  const {
    loading,
    error,
    searchedTodos,
    openModal,
    completedTodos,
    totalTodos,
    searchVal
  } = states;

  const {
    onCompleteTodo,
    onDeleteTodo,
    setOpenModal,
    setSearchVal,
    addTodo,
    sincronizeTodos
  } = statesUpdaters;

  return (
    <>
      <Header loading={loading}>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          />
        <TodoSearch
          setSearchVal={setSearchVal}
          searchVal={searchVal}
        />
      </Header>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <ShowError />}
        onLoading={() => <Loading />}
        onEmptyTodos={() => <EmptyList> <p>¡Crea tu primer TODO!</p></EmptyList>}
        onEmptySearch={() => <EmptyList > <p>No hay resultados para: {searchVal}</p></EmptyList>}
        // render={(todoItem:TodoItemModel) => (
        //   <TodoItem
        //     key={todoItem.id}
        //     id={todoItem.id}
        //     text={todoItem.text}
        //     completed={todoItem.completed}
        //     onComplete={() => onCompleteTodo(todoItem.id, todoItem.completed)}
        //     onDelete={() => onDeleteTodo(todoItem.id)}
        //   />
        // )}
      >
        {searchedTodos.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            text={todoItem.text}
            completed={todoItem.completed}
            onComplete={() => onCompleteTodo(todoItem.id, todoItem.completed)}
            onDelete={() => onDeleteTodo(todoItem.id)}
          />
        ))}
      </TodoList>

      {/* <TodoList>
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
      </TodoList> */}

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


      <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />
    </>
  );
}

export default App;
