import styles from "./todos.module.scss";

const NewTodoForm = ({ value, handleText, handleAction }) => {
  return (
    <label className={styles.todoForm}>
      <input
        placeholder="Add Tasks"
        value={value}
        onChange={handleText}
        className={styles.todoForm__input}
      />

      <button onClick={handleAction} className={styles.todoForm__btn}>
        Add todo
      </button>
    </label>
  );
};

export default NewTodoForm;
