import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getAuthError, isAuth } from "../../redux/auth/authSelectors";

import { signup } from "../../redux/auth/authOperations";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status, message } = useSelector(getAuthError);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector(isAuth);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, password };
    dispatch(signup(data));
    setName("");
    setEmail("");
    setPassword("");
  };
  if (isLogin) {
    navigate("/todo");
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <section>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={handleName}
          />
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
          <button type="button">Back</button>
          <button type="button">Log In</button>
          <button type="submit">Register</button>
        </section>
      </form>
      {status && <p style={{ color: "red" }}>{message}</p>}
    </section>
  );
};
export default Register;
