import React from "react";

import "./App.css";
import UserRoutes from "./components/UserRoutes";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <UserRoutes />
      <Footer />
    </div>
  );
}

export default App;
