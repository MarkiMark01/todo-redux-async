import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>“Oops, something went wrong... Error 404” 🕵️</p>
      <section>
        <NavLink to="/todos">Go to Todo List</NavLink>
      </section>
    </div>
  );
};
export default NotFoundPage;
