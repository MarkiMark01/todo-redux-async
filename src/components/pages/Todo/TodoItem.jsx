const TodoItem = ({ todo }) => {
  return (
    <li style={{ background: "yellow" }}>
      <input type="checkbox" />
      <span>{todo.title}</span>
      <span>&times;</span>
    </li>
  );
};

export default TodoItem;
