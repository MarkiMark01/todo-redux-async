import React, { useState } from "react";

const NewTasks = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <form>
      <input
        value={text}
        onChange={handleText}
        placeholder="Enter your tasks"
      ></input>
      <button type="button">Add Tasks</button>
    </form>
  );
};
export default NewTasks;
