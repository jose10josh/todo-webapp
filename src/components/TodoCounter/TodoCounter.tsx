import './TodoCounter.css';


type TodoCounterModel = {
  completedTodos:number,
  totalTodos:number,
  loading?:boolean,
}
function TodoCounter({completedTodos, totalTodos, loading}:TodoCounterModel) {
  return (
    <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };