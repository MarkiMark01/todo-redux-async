import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const goRegister = () => {
    navigate("/register");
    return null;
  };

  return (
    <section>
      <form>
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
      {/* {status && <p style={{ color: "red" }}>{message}</p>} */}
    </section>
  );
};
export default Login;
