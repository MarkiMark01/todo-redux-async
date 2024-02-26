import { useDispatch } from "react-redux";
import { toggleStatus, deleteTodo } from "../../../redux/todoOperations";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleStatus(id)); // Передача id у функцію toggleStatus
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleStatus}
      />
      <span>{title}</span>
      <span onClick={handleDeleteTodo}>&times;</span>
    </li>
  );
};

export default TodoItem;
