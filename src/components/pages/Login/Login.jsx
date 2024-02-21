import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAuthError, isAuth } from "../../redux/auth/authSelectors";
import { login } from "../../redux/auth/authOperations";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = useSelector(isAuth);
  const { status, message } = useSelector(getAuthError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const goTodo = (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(login(data));
    setEmail("");
    setPassword("");
  };

  if (isLogin) {
    navigate("/todo");
    return null;
  }

  const goRegister = () => {
    navigate("/register");
    return null;
  };

  return (
    <section>
      <form onSubmit={goTodo}>
        <section>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={handlePassword}
          />
        </section>
        <section>
          <button type="button" onClick={goRegister}>
            Register
          </button>
          <button type="submit">Log In</button>
        </section>
      </form>
      {status && (
        <p
        // style={{ color: "red" }}
        >
          {message}
        </p>
      )}
    </section>
  );
};
export default Login;
