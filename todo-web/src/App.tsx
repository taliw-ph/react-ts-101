import React, { useState } from "react";
import { Todo } from "./Todo/type";
import TodoList from "./Todo/Todolist";
import AddTodo from "./Todo/AddTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo = (id: number): void => {
    const newTodos = [...todos];
    for (let index = 0; index < todos.length; index++) {
      if (newTodos[index].id === id) {
        newTodos[index].completed = !newTodos[index].completed;
        break;
      }
    }
    setTodos(newTodos);
  };

  const addTodo = (text: string): void => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <h1>Todo list</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
};

export default App;
