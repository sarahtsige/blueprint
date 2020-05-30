import React from "react";
import "./Footer.css";
import Logo from "../assets/SamanthaHall_Logo_reversed.png";

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={Logo} alt="Samantha Hall white logo" />
      <p>555 Main Street, Austin, TX 98765</p>
      <p>
        <span className="privacy">Privacy Policy</span> | ©2016 Samantha Hall
        for Congress. All Rights Reserved.
      </p>
      <p className="footer-border">Paid for by Samantha Hall for Congress.</p>
    </footer>
  );
}

export default Footer;
