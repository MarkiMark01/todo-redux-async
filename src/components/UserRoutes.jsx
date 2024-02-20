import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Todo = lazy(() => import("./pages/Todo/Todo"));

const UserRoutes = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  </Suspense>
);

export default UserRoutes;
