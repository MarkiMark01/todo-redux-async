import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/auth/authOperations";
import { getAuthError } from "../../../redux/auth/authSelectors";
import useAuth from "../../../shared/hooks/useAuth";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status, message } = useSelector(getAuthError);
  const isLogin = useAuth();

  const dispatch = useDispatch();

  const onRegister = (e) => {
    e.preventDefault();

    // if (email.trim() === "" || password.trim() === "" || name.trim() === "") {
    //   alert("Enter your login and password or sign up, please :)");
    //   return;
    // }
    const data = { name, email, password };
    dispatch(signup(data));
    setName("");
    setEmail("");
    setPassword("");
  };

  const navigate = useNavigate();

  const handleReturnLogin = () => {
    navigate("/");
  };

  if (isLogin) {
    return navigate("/todos");
  }

  return (
    <>
      <main>
        <section>
          <form onSubmit={onRegister}>
            <h1>Sign In</h1>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <section>
              <button type="button" onClick={handleReturnLogin}>
                Log in
              </button>
              <button type="submit">Register</button>
            </section>
            <section>
              <div>
                <span>Already have an account?</span>
              </div>
            </section>
            <NavLink to={"/"}>Log In</NavLink>
          </form>
          {status && <p>{message}</p>}
        </section>
      </main>
    </>
  );
};

export default Signin;
