import { useState, useEffect } from "react";
import database from "../Createobject/firebase";

import "./index.css";

const Apidata = () => {
  const [getData, setGetData] = useState({});

  useEffect(() => {
    database.child("apidata").on("value", (details) => {
      setGetData(details.val());
    });
  }, []);
  return (
    <div className="ApiDataDiv">
      {getData &&
        Object.keys(getData).map((key) => (
          <div key={getData[key].id}>
            <p>
              <span>ID :-</span> {getData[key].id}
            </p>
            <p>
              <span>Title :-</span> {getData[key].title}
            </p>
            <p>
              <span>Image Source :-</span> {getData[key].Image_source_url}
            </p>
            <p>
              <span>Source Code :-</span> {getData[key].Source_code_link}
            </p>
            <button className="btn btn-success">Update</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        ))}
    </div>
  );
};
export default Apidata;
