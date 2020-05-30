import React from "react";
import "./Nav.css";
import Logo from "../assets/SamanthaHall_Logo.png";
import Twitter from "../assets/twitter-24.png";
import Facebook from "../assets/facebook-icon-24.png";
import Dollar from "../assets/dollar-icon.png";

function Nav() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="Samantha Hall Logo" />
      <ul>
        <li>
          <img className="twitter" src={Twitter} alt="Twitter Logo" />
        </li>
        <li>
          <img className="facebook" src={Facebook} alt="Facebook Logo" />
        </li>
        <li>
          <button className="donate">
            <img className="dollar-icon" src={Dollar} alt="Dollor Icon" />{" "}
            Donate
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
