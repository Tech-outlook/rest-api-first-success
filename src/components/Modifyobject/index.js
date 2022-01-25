import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import database from "../Createobject/firebase";
import "./index.css";

const Modifyobject = () => {
  let query = new URLSearchParams(useLocation().search);

  const [data, setData] = useState({
    id: uuidv4(),
    title: "",
    Image_source_url: "",
    Source_code_link: "",
  });

  const dataFromUser = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setData({
      ...data,
      title: query.get("title"),
      Image_source_url: query.get("Image_source_url"),
      Source_code_link: query.get("Source_code_link"),
    });
  }, []);

  const onSubmit = e =>{
    e.preventDefault();
    database.child(`apidata/${query.get('key')}`).set(
      data,
      err =>{
        if(err){
          console.log(err)
        }
        else{
          alert("Data updated")
        }
      }
    )
  }

  return (
    <div className="main-container">
      <div className="API-create-div">
        <h1>Edit and Save your API Object Here</h1>
        <form className="form-horizontal" onSubmit={onSubmit} autoComplete="off">
          <div className="form-group">
            <label className="control-label">Title</label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                value={data.title}
                name="title"
                onChange={dataFromUser}
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
                value={data.Image_source_url}
                name="Image_source_url"
                onChange={dataFromUser}
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
                value={data.Source_code_link}
                name="Source_code_link"
                onChange={dataFromUser}
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <input type="submit" className="btn btn-success" value="Save" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modifyobject;
