import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../components/redux/auth/authSelectors";
import { logout } from "../../components/redux/auth/authOperations";
import useAuth from "../shared/hooks/useAuth";

const Header = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();

  const isLogin = useAuth();

  const onLogout = () => {
    dispatch(logout());
    // return <Navigate to={"/"} />;
  };

  return (
    <header>
      <section>
        <span>My Todo List</span>
      </section>
      {isLogin ? (
        <section>
          <span>{name}</span>
          <button onClick={onLogout}>Log out</button>
        </section>
      ) : null}
    </header>
  );
};

export default Header;
