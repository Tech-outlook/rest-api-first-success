import { useState, useEffect } from "react";
import database from "../Createobject/firebase";
import { useHistory } from "react-router-dom";

import "./index.css";

const Apidata = () => {
  let history = useHistory();
  const [getData, setGetData] = useState({});

  useEffect(() => {
    database.child("apidata").on("value", (details) => {
      setGetData(details.val());
    });
  }, []);

  const deleteApiData = (key) => {
    database.child(`apidata/${key}`).remove((err) => {
      if (err) {
        console.log(err);
      }
    });
  };
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
            <button
              className="btn btn-success"
              onClick={() =>
                history.push(
                  `/Modifyobject?title=${getData[key].title}&Image_source_url=${getData[key].Image_source_url}&Source_code_link=${getData[key].Source_code_link}&key=${key}`
                )
              }
            >
              Update
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteApiData(key)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};
export default Apidata;
