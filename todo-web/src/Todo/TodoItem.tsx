import React from "react";
import { Todo } from "./type";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo, toggleTodo } = props;
  const { id, text } = todo;

  return (
    <li
      style={{
        textDecoration: props.todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={() => toggleTodo(id)}
    >
      {text}
    </li>
  );
};

export default TodoItem;
