import './TodoItem.css';

type TodoItemProps = {
  completed: boolean,
  text: string
}

function TodoItem(props:TodoItemProps) {

  const onComplete = () => {

  }

  const onDelete = () => {

  }

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={() => {onComplete()}}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
        onClick={() => {onDelete()}}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };