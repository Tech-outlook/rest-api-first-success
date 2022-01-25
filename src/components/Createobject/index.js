import { useState, useEffect } from "react";
import database from "./firebase";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const Createobject = () => {
  const [data, setData] = useState({
    id: uuidv4(),
    title: "",
    Image_source_url: "",
    Source_code_link: "",
  });
  const [getData, setGetData] = useState({});

  useEffect(() => {
    database.child("apidata").on("value", (details) => {
      setGetData(details.val());
    });
  }, []);
  const dataFromUser = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitUserData = async (e) => {
    e.preventDefault();
    var dataAdded = await database.child("apidata").push(data, (err) => {
      if (err) {
        console.log(err);
      } else {
        alert("Data Added");
      }
    });
    setData({
      id: "",
      title: "",
      Image_source_url: "",
      Source_code_link: "",
    });
  };
  return (
    <div className="main-container">
      <div className="API-create-div">
        <h1>Create, Post, your API Object Here</h1>
        <form className="form-horizontal" onSubmit={submitUserData}>
          <div className="form-group">
            <label className="control-label">Title</label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                onChange={dataFromUser}
                value={data.title}
                name="title"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Image Source URL</label>
            <div>
              <input
                type=""
                className="form-control"
                placeholder="Enter Image Source URL"
                onChange={dataFromUser}
                value={data.Image_source_url}
                name="Image_source_url"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Source Code Link</label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Source Code Link"
                onChange={dataFromUser}
                value={data.Source_code_link}
                name="Source_code_link"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <input type="submit" className="btn btn-success" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createobject;
