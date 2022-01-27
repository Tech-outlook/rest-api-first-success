import React from "react";
import "./index.css";

const Loginpage = () => {
  return (
    <div className="Login-page">
      <h1>Hello i am from Login page</h1>
      <form className="form">
        <input type="email" className="form-control" placeholder="Enter Email Here"/>
        <input type="password" className="form-control" placeholder="Enter Password Here"/>
        <input type="submit" className="btn btn-success" value="Login" />
      </form>
    </div>
  );
};

export default Loginpage;
