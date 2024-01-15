import BodyComponent from "./BodyComponent";

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
// img there is no end tag
// Components are just JS functione where we can repeat many times.
const HeaderComponent = () => {
  const [loginButton, setLoginButton] = useState("Login");
  console.log("HEader rendered , for every state variable changed whole header component is rendered again")

  return (
    <div className="header">
      <div className="log-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About </li>
          <li> Contact Us </li>
          <li> Cart </li>
          // Toggle feature
          <button
            className="btn-login"
            onClick={() => {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login"); // Toggle feature
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
