import useAuth from "../shared/myHook/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLogin = useAuth();

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
export default PrivateRoute;
