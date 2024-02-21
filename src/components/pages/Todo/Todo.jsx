import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUser } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperations";
import AddTasks from "./AddTasks";

const Todo = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <header style={{ background: "blue" }}>
        <section>
          <input placeholder="Filter your tasks" />
        </section>
        <section>
          <span style={{ color: "white" }}>{name}</span>
          <button type="button" onClick={onLogout}>
            Log Out
          </button>
        </section>
      </header>

      <main style={{ height: "100vh" }}>
        <AddTasks />
      </main>

      <footer style={{ background: "blue", color: "white" }}>
        2024@Markiyan Marych
      </footer>
    </>
  );
};
export default Todo;
