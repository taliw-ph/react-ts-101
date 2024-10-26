import React, { useState } from "react";

type AddTodoProps = {
  addTodo: (text: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("❌ Please enter a todo before submitting.");
    } else {
      props.addTodo(text);
      setText("");
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new Todo"
      />
      <button type="submit">Add</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};

export default AddTodo;
