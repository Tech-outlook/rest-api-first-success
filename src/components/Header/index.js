import { Link } from "react-router-dom";
import { Component } from "react";
import { authdb } from "../Createobject/firebase";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <nav className="Navbar fixed-top">
        <h1>API Object Creating</h1>
        <div className="linksdiv">
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
          <button onClick={() => authdb.signOut()} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
