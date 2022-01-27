import React from "react";
import "./index.css";

const Loginpage = () => {
  return (
    <div className="Login-page">
      <h1>Hello i am from Login page</h1>
      <form className="form">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email Here"
        />
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password Here"
        />
        <input type="submit" className="btn btn-success" value="Login" />
        <a
          href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiz8qPdzNH1AhXF0JYKHd43DN8YABAAGgJ0bA&ohost=www.google.com&cid=CAASE-RoPDF9B6TSJ4pnS_9rCS_1c2o&sig=AOD64_2kYIk3uGnRoxz7MZNQu_wxlDq9VA&q&adurl&ved=2ahUKEwjpjJ7dzNH1AhWOvpQKHSlBBEEQ0Qx6BAgCEAE"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Forgotten password <span>?</span>
        </a>
      </form>
    </div>
  );
};

export default Loginpage;
