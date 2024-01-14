import BodyComponent from "./BodyComponent";

import { LOGO_URL } from "../utils/constants";
// img there is no end tag
// Components are just JS functione where we can repeat many times.
const HeaderComponent = () => {
    return (
      <div className="header">
        <div className="log-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li> Home </li>
            <li> About </li>
            <li> Contact Us </li>
            <li> Cart </li>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;