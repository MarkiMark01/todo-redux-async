import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    navigate("todo");
  };

  return (
    <section>
      <form>
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
          <button type="button" onClick={() => handleSubmit()}>
            Register
          </button>
        </section>
      </form>
    </section>
  );
};
export default Register;
