import { Link } from "react-router-dom";
import { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <nav className="Navbar fixed-top">
        <h1>API Object Creating</h1>
        <ul>
          <li>
            <Link className="link" to="../Createobject">
              Create
            </Link>
          </li>

          <li>
            <Link className="link" to="../APIobjects">
              API objects
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
