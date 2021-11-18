import React from "react";
import classes from "../Styles/Header.module.scss";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <div className={classes.Header}>
      <img src={Logo} alt="logo" />
      <button>Try it free</button>
    </div>
  );
}

export default Header;
