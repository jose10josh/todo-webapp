import React from 'react';
import './TodoList.css'


type TodoListProps = {
  children: React.ReactNode
}
function TodoList(props:TodoListProps) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };