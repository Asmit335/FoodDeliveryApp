import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src="./images/logo1.png" className="logo" alt="loading logo" />
      <ul className="navbarMenu">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          MobileApp
        </li>
        <li
          onClick={() => setmenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </li>
      </ul>
      <div className="navbarRight">
        <img src="./images/search_icon.png" alt="loading" />
        <div className="search">
          <img src="./images/basket_icon.png" alt="loading" />
          <div className="dot"></div>
        </div>
        <button className="signInBtn">SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
