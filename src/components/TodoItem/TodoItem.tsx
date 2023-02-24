import './TodoItem.css';

type TodoItemProps = {
  id: number,
  completed: boolean,
  text: string,
  onComplete:React.MouseEventHandler<HTMLButtonElement>
  onDelete:React.MouseEventHandler<HTMLButtonElement>
}

function TodoItem(props:TodoItemProps) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };