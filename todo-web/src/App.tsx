import React, { useEffect, useState } from "react";
import { Todo } from "./Todo/type";
import TodoList from "./Todo/Todolist";
import AddTodo from "./Todo/AddTodo";

const API_URL = "http://localhost:3001/todos";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo = async (id: number) => {
    try {
      // const newTodos = [...todos];
      // for (let index = 0; index < todos.length; index++) {
      //   if (newTodos[index].id === id) {
      //     newTodos[index].completed = !newTodos[index].completed;
      //     break;
      //   }
      // }
      // setTodos(newTodos);
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) return;
      const config: RequestInit = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      };
      await fetch(`${API_URL}/${id}`, config);
      await getTodosData();
    } catch (error) {
      alert("Cannot update todo, please try again later.");
      console.log("Error::: ", error);
    }
  };

  const getTodosData = async () => {
    try {
      const config: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(API_URL, config);

      if (!response.ok) {
        throw new Error("Network response was not OK!");
      }

      const data = (await response.json()) as Todo[];
      setTodos(data);
    } catch (error) {
      alert("Cannot get todos data, please try again later.");
      console.log("Error::: ", error);
    }
  };

  const addTodo = async (text: string) => {
    // const newTodo: Todo = {
    //   id: todos.length + 1,
    //   text,
    //   completed: false,
    // };
    // setTodos([...todos, newTodo]);
    try {
      const body = {
        text: text,
      };
      const config: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      await fetch(API_URL, config);
      await getTodosData();
    } catch (error) {
      alert("Cannot create new todo, please try again later.");
      console.log("Create Error::: ", error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const config: RequestInit = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      await fetch(`${API_URL}/${id}`, config);
      await getTodosData();
    } catch (error) {
      alert("Cannot delete todo, please try again later.");
      console.log("Error::: ", error);
    }
  };

  useEffect(() => {
    getTodosData();
  }, []);

  return (
    <section
      style={{
        padding: "20px",
      }}
    >
      <h1>Todo list</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </section>
  );
};

export default App;
