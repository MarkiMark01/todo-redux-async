import React, { useState } from "react";

const Login = () => {
  return (
    <section>
      <form>
        <section>
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
        </section>
        <section>
          <button type="button">Back</button>
          <button type="submit">Register</button>
          <button type="button">Log In</button>
        </section>
      </form>
      {/* {status && <p style={{ color: "red" }}>{message}</p>} */}
    </section>
  );
};
export default Login;
