import React from "react";
import { useSelector } from "react-redux";

import { getUser } from "../../redux/auth/authSelectors";

const Todo = () => {
  const { name } = useSelector(getUser);

  return (
    <>
      <header>
        <section>Filter</section>
        <section>
          <span>{name}</span>
          <button>Log Out</button>
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
