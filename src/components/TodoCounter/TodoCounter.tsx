import './TodoCounter.css';


type TodoCounterModel = {
  completedTodos:number,
  totalTodos:number
}
function TodoCounter({completedTodos, totalTodos}:TodoCounterModel) {
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };