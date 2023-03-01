import React from "react";
import logo from "../../assets/logo.png";
import { FaPizzaSlice } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="todo" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
