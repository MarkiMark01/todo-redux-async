import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Register = lazy(() => import("./pages/Register/Register"));

const UserRoutes = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  </Suspense>
);

export default UserRoutes;
