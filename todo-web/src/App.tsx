import React, { useEffect, useState } from "react";
import { Todo } from "./Todo/type";
import TodoList from "./Todo/Todolist";
import AddTodo from "./Todo/AddTodo";

const API_URL = "http://localhost:3001/todos";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // ฟังก์ชันสำหรับเปลี่ยนสถานะการ completed ของ todo
  const toggleTodo = async (id: number, currentStatus: boolean) => {
    try {
      const config: RequestInit = {
        // ใช้ method PATCH เพื่ออัพเดทข้อมูล todo ที่มี id ตรงกับที่ส่งมา โดยกำหนด completed ใหม่
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !currentStatus,
        }),
      };
      // ส่ง request ไปที่ API_URL พร้อมกับ config ที่กำหนดไว้
      await fetch(`${API_URL}/${id}`, config);
      // เรียกใช้ getTodosData เพื่อดึงข้อมูล todos ใหม่
      await getTodosData();
    } catch (error) {
      alert("Cannot update todo, please try again later.");
      console.log("Error::: ", error);
    }
  };

  // ฟังก์ชันสำหรับดึงข้อมูล todos จาก API
  const getTodosData = async () => {
    try {
      const config: RequestInit = {
        method: "GET", // ใช้ method GET เพื่อดึงข้อมูล
        headers: {
          "Content-Type": "application/json",
        },
      };
      // ส่ง request ไปที่ API_URL พร้อมกับ config ที่กำหนดไว้
      const response = await fetch(API_URL, config);
      // แปลง response ที่ได้จาก JSON เป็น Todo[] ด้วย response.json()
      const data = (await response.json()) as Todo[];
      // นำข้อมูลที่ได้ไปเก็บไว้ใน state ด้วย setTodos
      setTodos(data);
    } catch (error) {
      alert("Cannot get todos data, please try again later.");
      console.log("Error::: ", error);
    }
  };

  // ฟังก์ชันสำหรับเพิ่ม todo ใหม่
  const addTodo = async (text: string) => {
    try {
      const body = {
        text: text,
      };
      const config: RequestInit = {
        method: "POST", // ใช้ method POST
        headers: {
          "Content-Type": "application/json",
        },
        // แปลง body จาก object เป็น string ด้วย JSON.stringify ก่อนส่งข้อมูล
        body: JSON.stringify(body),
      };
      // ส่ง request ไปที่ API_URL พร้อมกับ config ที่กำหนดไว้
      await fetch(API_URL, config);
      // เรียกใช้ getTodosData เพื่อดึงข้อมูล todos ใหม่
      await getTodosData();
    } catch (error) {
      alert("Cannot create new todo, please try again later.");
      console.log("Create Error::: ", error);
    }
  };

  // ฟังก์ชันสำหรับลบ todo
  const deleteTodo = async (id: number) => {
    try {
      const config: RequestInit = {
        method: "DELETE", // ใช้ method DELETE เพื่อลบ todo ที่มี id ตรงกับที่ส่งมา
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

  // เรียกใช้ getTodosData เมื่อ component ถูก render ครั้งแรก
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
