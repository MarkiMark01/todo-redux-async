import styles from "./todos.module.scss";

const NewTodoForm = ({ value, handleText, handleAction }) => {
  return (
    <label className={styles.todoForm}>
      <section className={styles.todoForm__inputBox}>
        <div className={styles.todoForm__inputBox_plus}>+</div>
        <input
          placeholder="Add Tasks"
          value={value}
          onChange={handleText}
          className={styles.todoForm__inputBox_input}
        />
      </section>
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
