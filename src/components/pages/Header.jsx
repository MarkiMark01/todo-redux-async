import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../components/redux/auth/authSelectors";
import { logout } from "../../components/redux/auth/authOperations";
import useAuth from "../shared/hooks/useAuth";
import styles from "../shared/styles/styles.module.scss";

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
      <section className={styles.header}>
        <span>Todo List</span>
        {isLogin ? (
          <section className={styles.logout}>
            <span>{name}</span>
            <button onClick={onLogout} className={styles.logout__btn}>
              Log out
            </button>
          </section>
        ) : null}
      </section>
    </header>
  );
};

export default Header;
