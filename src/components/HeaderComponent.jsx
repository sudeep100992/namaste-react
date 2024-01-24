import BodyComponent from "./BodyComponent";

import { LOGO_URL } from "../utils/constants";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// img there is no end tag
// Components are just JS functione where we can repeat many times.
const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  const [loginButton, setLoginButton] = useState("Login");
  console.log(
    "HEader rendered , for every state variable changed whole header component is rendered again"
  );


  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // useEffect call back function is invoked everytime loginButton state changes
  useEffect(() => {
    console.log("useEffect called in Header Component");
  }, [loginButton]);

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="log-container">
        <img className="logo w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "🟢" : "🔴" } 
          </li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery"> Grocery </Link>
          </li>
          <li className="px-4">
            <Link to="/About"> About </Link>
          </li>
          <li className="px-4">
            <a href="/Contact"> Contact </a>
          </li>
          <li className="px-4"> Cart </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
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
