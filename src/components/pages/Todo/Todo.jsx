import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUser } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperations";

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
      <header>
        <section>Filter</section>
        <section>
          <span>{name}</span>
          <button type="button" onClick={onLogout}>
            Log Out
          </button>
        </section>
      </header>
      <main>
        <section>
          <p>enter tasks</p>
        </section>
        <section>Tasks List</section>
      </main>
      <footer>2024@Markiyan Marych</footer>
    </>
  );
};
export default Todo;
