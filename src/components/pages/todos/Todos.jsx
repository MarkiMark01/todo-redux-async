import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewTodo, fetchTodos } from "../../redux/todo/todoOperations";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import FilterText from "./FilterText";
import styles from "./todos.module.scss";

const Todos = () => {
  const [text, setText] = useState("");
  const [filterText, setFilterText] = useState("");
  const { error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleFilterText = (e) => {
    setFilterText(e.target.value);
  };

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText("");
    } else {
      alert("Please, enter your tasks!");
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <main className={styles.todos}>
      <section className={styles.todos__container}>
        <section>
          <NewTodoForm
            value={text}
            handleText={handleText}
            handleAction={handleAction}
          />
          <FilterText
            filterText={filterText}
            handleFilterText={handleFilterText}
          />
        </section>
        <TodoList filter={filterText} />
        {/* {status === "loading" && <h2>Loading...</h2>} */}
        {error && <h2>An error occured: {error}</h2>}
      </section>
    </main>
  );
};

export default Todos;
