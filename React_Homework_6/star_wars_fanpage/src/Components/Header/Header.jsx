import "./Header.css";
import { Link, NavLink } from "react-router-dom";

import Home from "../Pages/Home/Home";

import People from "../Pages/People/People";

import Planets from "../Pages/Planets/Planets";

const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <ul className="navlinks">

        <Link to="/home">
            <li>Home</li>
          </Link>

          <Link to="/people">
            <li>People</li>
          </Link>

          <Link to="/planets" >
            <li>Planets</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;