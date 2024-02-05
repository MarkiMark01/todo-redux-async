import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Register = lazy(() => import("./pages/Register/Register"));
const Todo = lazy(() => import("./pages/Todo/Todo"));

const UserRoutes = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  </Suspense>
);

export default UserRoutes;
