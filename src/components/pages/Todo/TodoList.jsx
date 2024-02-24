import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../redux/todo/todoOperations";
import { selectTodos } from "../../redux/todo/todosSlice";
// import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(selectTodos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul style={{ background: "green" }}>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
