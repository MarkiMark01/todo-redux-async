const NewTodoForm = ({ value, handleText, handleAction }) => {
  return (
    <label>
      <input placeholer="new todo" value={value} onChange={handleText} />
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
