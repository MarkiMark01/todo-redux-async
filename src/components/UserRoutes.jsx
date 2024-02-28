import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFoundPage from "./pages/NotFoundPage";

const PrivateRoute = lazy(() => import("./modules/PrivateRoute"));
const Todos = lazy(() => import("./pages/todos/Todos"));
const Login = lazy(() => import("./pages/login/Login"));
const Registration = lazy(() => import("./pages/registration/Registration"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/todos" element={<Todos />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
