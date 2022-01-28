import { Link } from "react-router-dom";
import { Component } from "react";
import { authdb } from "../Createobject/firebase";
import "./index.css";

class Header extends Component {
  render() {
    const signoutAndRefresh = () => {
      authdb.signOut();
      window.location.reload();
    };
    return (
      <nav className="Navbar fixed-top">
        <h1>API Object Creating</h1>
        <div className="linksdiv">
          <Link className="link" to="../Createobject">
            <button className="button">Create</button>
          </Link>

          <Link className="link" to="../APIobjects">
            <button className="button">API Objects</button>
          </Link>

          <a href="https://tech-outlook.github.io/REST-API-Final">
            <button onClick={signoutAndRefresh} className="logout-btn">
              Logout
            </button>
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
