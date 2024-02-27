import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Todos = lazy(() => import("./pages/todos/Todos"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Todos />}></Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
