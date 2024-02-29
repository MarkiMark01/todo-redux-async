import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuth from "../../shared/hooks/useAuth";
import { login } from "../../redux/auth/authOperations";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const isLogin = useAuth();

  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Enter your login and password or sign up, please :)");
      return;
    }
    const data = { email, password };
    dispatch(login(data));
    setEmail("");
    setPassword("");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  if (isLogin) {
    return navigate("/todos");
  }

  return (
    <>
      <main>
        <section>
          <form onSubmit={onLogin}>
            <h1>Log in</h1>
            {/* <p>
              Log in now to unlock your exclusive access to content and offers
            </p> */}
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
              <button type="button" onClick={handleSignup}>
                Sign up
              </button>
              <button type="submit">Log in</button>
            </section>
            <section>
              <div>
                <span>Don't have an account?</span>
              </div>
            </section>
            <NavLink to={"/register"}>Register Now</NavLink>
          </form>
        </section>
      </main>
    </>
  );
};
export default Login;
