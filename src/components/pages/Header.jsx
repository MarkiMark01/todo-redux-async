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
        <span className={styles.header__title}>Todo List</span>
        {isLogin ? (
          <section className={styles.header__logout}>
            <span className={styles.header__logout_name}>{name}</span>
            <button onClick={onLogout} className={styles.header__logout_btn}>
              Log out
            </button>
          </section>
        ) : null}
      </section>
    </header>
  );
};

export default Header;
