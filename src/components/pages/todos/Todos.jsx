import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewTodo, fetchTodos } from "../../../redux/todo/todoOperations";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const Todos = () => {
  const [text, setText] = useState("");
  const { error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText("");
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />

      {/* {status === "loading" && <h2>Loading...</h2>} */}
      {error && <h2>An error occured: {error}</h2>}

      <TodoList />
    </div>
  );
};

export default Todos;
