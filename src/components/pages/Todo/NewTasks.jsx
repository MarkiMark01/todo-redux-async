import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodos } from "../../redux/todo/todoOperations";

const NewTasks = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const isDuplicate = () => {
    return new Set(text.map((item) => item.text)).size !== text.length;
  };

  const handleAction = () => {
    if (text.trim().length && !isDuplicate()) {
      dispatch(addTodos(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleAction}>
      <input
        value={text}
        onChange={handleText}
        placeholder="Enter your tasks"
      ></input>
      <button type="submit">Add Tasks</button>
    </form>
  );
};
export default NewTasks;
