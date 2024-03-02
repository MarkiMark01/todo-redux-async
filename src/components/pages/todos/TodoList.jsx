import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styles from "./todos.module.scss";

const TodoList = ({ filter }) => {
  const todos = useSelector((state) => state.todos.todos);

  const filteredTodos = () => {
    return todos.filter((el) =>
      el.title.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={styles.list}>
      {filteredTodos().map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
