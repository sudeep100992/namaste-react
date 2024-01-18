import BodyComponent from "./BodyComponent";

import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// img there is no end tag
// Components are just JS functione where we can repeat many times.
const HeaderComponent = () => {
  const [loginButton, setLoginButton] = useState("Login");
  console.log(
    "HEader rendered , for every state variable changed whole header component is rendered again"
  );

  // useEffect call back function is invoked everytime loginButton state changes
  useEffect(() => {
    console.log("useEffect called");
  }, [loginButton]);

  return (
    <div className="header">
      <div className="log-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/About"> About </Link>
          </li>
          <li>
            <a href="/Contact"> Contact </a>
          </li>
          <li> Cart </li>
          <button
            className="btn-login"
            onClick={() => {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
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
