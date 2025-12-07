import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app-container">
      <Navbar setActivePage={setActivePage} />
      <main>
        {activePage === "home" && <Home />}
        {activePage === "login" && <Login />}
        {activePage === "register" && <Register />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
