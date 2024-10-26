import React from "react";
import { Todo } from "./type";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <li
      style={{
        listStyleType: "none",
        margin: "10px 0",
      }}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      {props.todo.completed ? "✅" : "⬜️"}
      <span
        style={{
          textDecoration: props.todo.completed ? "line-through" : "none",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        {props.todo.text}
      </span>
      <button
        style={{
          marginLeft: "10px",
          color: "red",
        }}
        onClick={(e) => {
          e.stopPropagation();
          props.deleteTodo(props.todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
