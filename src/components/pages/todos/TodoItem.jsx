import { useDispatch } from "react-redux";
import { toggleStatus, deleteTodo } from "../../redux/todo/todoOperations";
import styles from "./todos.module.scss";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleStatus(id)); // Передача id у функцію toggleStatus
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={styles.list__item}>
      <section className={styles.list__item_tasks}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleStatus}
          className={styles.list__item_input}
        />
        <span className={styles.list__item_title}>{title}</span>
      </section>
      <span onClick={handleDeleteTodo} className={styles.list__item_croos}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
