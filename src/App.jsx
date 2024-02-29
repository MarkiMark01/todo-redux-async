import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./components/redux/auth/authOperations";

import "./App.css";
import UserRoutes from "./components/UserRoutes";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <UserRoutes />
      <Footer />
    </div>
  );
}

export default App;
