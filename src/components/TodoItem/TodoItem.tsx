import { TodoIcon } from '../Icons/TodoIcon';
import './TodoItem.css';

type TodoItemProps = {
  id: number,
  completed: boolean,
  text: string,
  onComplete:(id: number, completed: boolean) => void
  onDelete:(id: number) => void
  onEdit:(id: number) => void
}

function TodoItem(props:TodoItemProps) {
  return (
    <li className="TodoItem">
      <TodoIcon type="check" color={props.completed ? '#4caf50' : 'gray'} onClick={props.onComplete}/>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <TodoIcon type="edit" color='gray' onClick={props.onEdit}/>
      <TodoIcon type="delete" color='gray' onClick={props.onDelete}/>
    </li>
  );
}

export { TodoItem };