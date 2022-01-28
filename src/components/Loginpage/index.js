import React from "react";
import { useState } from "react";
import "./index.css";
import { authdb } from "../Createobject/firebase";

const Loginpage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const onchangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    authdb
      .signInWithEmailAndPassword(email, password)
      .then((user) => setData(user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login-page">
      <h1>Hey Admin Login First</h1>
      <form className="form">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email Here"
          value={email}
          name="email"
          onChange={onchangeHandler}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password Here"
          value={password}
          name="password"
          onChange={onchangeHandler}
        />
        <input
          type="submit"
          className="btn btn-success"
          value="Login"
          onClick={signIn}
        />
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
